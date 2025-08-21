import React from 'react';
import { useForm } from 'react-hook-form';
import { Send } from 'lucide-react';

// Simple useToast implementation
const useToast = () => {
  const toast = ({ title, description, variant }) => {
    alert(`${title}\n\n${description}`);
    console.log(`Toast [${variant || 'info'}]: ${title} - ${description}`);
  };

  return { toast };
};

const ContactForm = () => {
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log('Form submitted:', data);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: 'Message Sent!',
        description: "Thank you for your message. We'll get back to you soon.",
      });

      reset();
    } catch {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Send Us a Message
      </h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label className="text-gray-700 font-medium">Name</label>
            <input
              type="text"
              placeholder="Your full name"
              {...register('name', {
                required: 'Name is required',
                minLength: { value: 2, message: 'Name must be at least 2 characters.' },
              })}
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:border-blue-500"
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-700 font-medium">Email</label>
            <input
              type="email"
              placeholder="your.email@example.com"
              {...register('email', {
                required: 'Email is required',
                pattern: { value: /^\S+@\S+$/i, message: 'Please enter a valid email address.' },
              })}
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:border-blue-500"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Subject */}
        <div>
          <label className="text-gray-700 font-medium">Subject</label>
          <input
            type="text"
            placeholder="What is this regarding?"
            {...register('subject', {
              required: 'Subject is required',
              minLength: { value: 5, message: 'Subject must be at least 5 characters.' },
            })}
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:border-blue-500"
          />
          {errors.subject && (
            <p className="text-red-600 text-sm mt-1">{errors.subject.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="text-gray-700 font-medium">Message</label>
          <textarea
            placeholder="Tell us how we can help you..."
            {...register('message', {
              required: 'Message is required',
              minLength: { value: 10, message: 'Message must be at least 10 characters.' },
            })}
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 mt-1 min-h-[120px] focus:outline-none focus:border-blue-500"
          />
          {errors.message && (
            <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
        >
          <Send className="w-4 h-4" />
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
