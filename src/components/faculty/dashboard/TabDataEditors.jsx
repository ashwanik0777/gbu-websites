import React from "react";
import { Plus, Trash2, Sparkles } from "lucide-react";
import Field from "./Field";
import { inputClass, deepClone, parseCommaList } from "./constants";

const toLabel = (value) =>
  value
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[_-]/g, " ")
    .replace(/^./, (char) => char.toUpperCase());

const inferEmptyValue = (value) => {
  if (Array.isArray(value)) return [];
  if (typeof value === "number") return 0;
  if (typeof value === "boolean") return false;
  return "";
};

const buildTemplateFromItem = (item) => {
  if (!item || typeof item !== "object") return {};
  const output = {};
  Object.keys(item).forEach((key) => {
    output[key] = inferEmptyValue(item[key]);
  });
  return output;
};

const valueToInput = (value) => {
  if (Array.isArray(value)) return value.join(", ");
  return value ?? "";
};

const inputToValue = (currentValue, rawValue) => {
  if (Array.isArray(currentValue)) return parseCommaList(rawValue);
  if (typeof currentValue === "number") return Number(rawValue || 0);
  if (typeof currentValue === "boolean") return rawValue === "true";
  return rawValue;
};

const ArrayObjectEditor = ({ title, items, onChange }) => {
  const safeItems = Array.isArray(items) ? items : [];
  const baseTemplate = buildTemplateFromItem(safeItems[0]);

  const updateItemField = (index, key, rawValue) => {
    const next = deepClone(safeItems);
    next[index][key] = inputToValue(next[index][key], rawValue);
    onChange(next);
  };

  const addItem = () => {
    const next = deepClone(safeItems);
    next.push({ ...baseTemplate });
    onChange(next);
  };

  const removeItem = (index) => {
    const next = safeItems.filter((_, i) => i !== index);
    onChange(next);
  };

  const fieldKeys = Object.keys(baseTemplate);

  return (
    <div className="rounded-xl border border-stone-200 bg-stone-50 p-4">
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-sm font-semibold text-stone-800">{title}</h4>
        <button
          type="button"
          onClick={addItem}
          className="inline-flex items-center gap-1 rounded-lg bg-stone-900 px-2.5 py-1.5 text-xs font-medium text-white hover:bg-stone-800"
        >
          <Plus className="h-3.5 w-3.5" /> Add
        </button>
      </div>

      {safeItems.length === 0 ? (
        <p className="text-xs text-stone-500">No items yet.</p>
      ) : (
        <div className="space-y-3">
          {safeItems.map((item, index) => (
            <div key={`${title}-${index}`} className="rounded-lg border border-stone-200 bg-white p-3">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-wide text-stone-500">Item {index + 1}</p>
                <button
                  type="button"
                  onClick={() => removeItem(index)}
                  className="inline-flex items-center gap-1 rounded-md border border-rose-200 bg-rose-50 px-2 py-1 text-xs font-medium text-rose-700 hover:bg-rose-100"
                >
                  <Trash2 className="h-3.5 w-3.5" /> Remove
                </button>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                {fieldKeys.map((key) => {
                  const rawValue = valueToInput(item[key]);
                  const isLongText = typeof rawValue === "string" && rawValue.length > 120;
                  return (
                    <Field key={`${title}-${index}-${key}`} label={toLabel(key)}>
                      {isLongText ? (
                        <textarea
                          className={`${inputClass} min-h-24`}
                          value={rawValue}
                          onChange={(e) => updateItemField(index, key, e.target.value)}
                        />
                      ) : (
                        <input
                          className={inputClass}
                          value={rawValue}
                          onChange={(e) => updateItemField(index, key, e.target.value)}
                        />
                      )}
                    </Field>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const ScalarEditor = ({ title, value, onChange }) => {
  const rawValue = valueToInput(value);
  const isLongText = typeof rawValue === "string" && rawValue.length > 140;

  return (
    <div className="rounded-xl border border-stone-200 bg-stone-50 p-4">
      <Field label={title}>
        {isLongText ? (
          <textarea className={`${inputClass} min-h-28`} value={rawValue} onChange={(e) => onChange(inputToValue(value, e.target.value))} />
        ) : (
          <input className={inputClass} value={rawValue} onChange={(e) => onChange(inputToValue(value, e.target.value))} />
        )}
      </Field>
    </div>
  );
};

const SectionCard = ({ sectionKey, sectionValue, onSectionChange }) => {
  const isObjectSection = sectionValue && typeof sectionValue === "object" && !Array.isArray(sectionValue);

  if (!isObjectSection) {
    return <ScalarEditor title={toLabel(sectionKey)} value={sectionValue} onChange={onSectionChange} />;
  }

  const innerKeys = Object.keys(sectionValue);

  const updateInnerKey = (key, value) => {
    onSectionChange({
      ...sectionValue,
      [key]: value,
    });
  };

  return (
    <div className="rounded-2xl border border-stone-300 bg-white p-4 shadow-sm">
      <h3 className="mb-3 text-base font-semibold text-stone-900">{toLabel(sectionKey)}</h3>
      <div className="space-y-4">
        {innerKeys.map((key) => {
          const value = sectionValue[key];
          if (Array.isArray(value) && value.every((item) => typeof item === "object" && item !== null)) {
            return (
              <ArrayObjectEditor
                key={`${sectionKey}-${key}`}
                title={toLabel(key)}
                items={value}
                onChange={(next) => updateInnerKey(key, next)}
              />
            );
          }

          return (
            <ScalarEditor
              key={`${sectionKey}-${key}`}
              title={toLabel(key)}
              value={value}
              onChange={(next) => updateInnerKey(key, next)}
            />
          );
        })}
      </div>
    </div>
  );
};

const TabDataEditors = ({ tabData, onReplaceTabData }) => {
  const sectionKeys = Object.keys(tabData || {});

  return (
    <section id="tab-data-editors" className="rounded-2xl border border-stone-300 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-stone-900">Faculty Tabs Manager</h2>
          <p className="text-sm text-stone-600">All faculty detail tabs are editable from this visual form UI.</p>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
          <Sparkles className="h-3.5 w-3.5" /> Live Form Mode
        </span>
      </div>

      <div className="space-y-5">
        {sectionKeys.map((sectionKey) => (
          <SectionCard
            key={sectionKey}
            sectionKey={sectionKey}
            sectionValue={tabData[sectionKey]}
            onSectionChange={(value) => onReplaceTabData(sectionKey, value)}
          />
        ))}
      </div>
    </section>
  );
};

export default TabDataEditors;
