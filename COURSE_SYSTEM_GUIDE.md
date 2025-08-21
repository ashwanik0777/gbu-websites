# Dynamic Course Details System

## Overview

This refactored course details system allows you to create and manage course information for multiple schools and programs dynamically. The system is now modular, reusable, and easily extensible.

## Key Features

✅ **Dynamic Content**: Course data is loaded based on URL parameters or query strings
✅ **Multi-School Support**: Supports courses across different schools (Engineering, Management, Biotechnology, etc.)
✅ **Reusable Components**: Single component that works for all courses
✅ **Course Selector**: Easy navigation between courses and schools
✅ **Search Functionality**: Course listing with search and filter capabilities
✅ **Responsive Design**: Works on all device sizes
✅ **Error Handling**: Graceful handling of missing courses
✅ **SEO Friendly**: URL structure supports SEO and direct linking

## File Structure

```
src/
├── Data/
│   └── coursesData.js          # Central course data store
├── components/departments/
│   ├── courseDetailed.jsx      # Main course details component (refactored)
│   ├── CourseDetailedLayout.jsx # Layout component with course selector
│   ├── CourseSelector.jsx      # Component for switching between courses
│   └── CourseListing.jsx       # Course listing/search page
└── routes/
    └── router.jsx              # Updated routes for dynamic courses
```

## How to Use

### 1. Adding New Courses

To add a new course, edit `src/Data/coursesData.js`:

```javascript
export const coursesData = {
  "school-name": {
    "course-slug": {
      id: "unique-id",
      title: "Course Title",
      subtitle: "Course Subtitle",
      description: "Course description...",
      duration: "4 Years",
      level: "Undergraduate",
      // ... other course properties
    }
  }
};
```

### 2. URL Patterns

The system supports multiple URL patterns:

- `/courses` - Course listing page with search
- `/schools/departments/courseDetailed?school=engineering&course=computer-science`
- `/schools/departments/courseDetailed/engineering/computer-science` (SEO-friendly)
- `/schools/departments/courseDetailed` (defaults to engineering/computer-science)

### 3. Accessing Courses

#### From Course Listing Page:
Visit `/courses` to see all available courses with search and filter options.

#### Direct Links:
```javascript
// Computer Science Engineering
/schools/departments/courseDetailed?school=engineering&course=computer-science

// Information Technology
/schools/departments/courseDetailed?school=engineering&course=information-technology

// MBA
/schools/departments/courseDetailed?school=management&course=mba

// Biotechnology
/schools/departments/courseDetailed?school=biotechnology&course=bsc-biotech
```

### 4. Adding New Schools

To add a new school:

1. Add the school data to `coursesData.js`:
```javascript
"new-school": {
  "course-1": { /* course data */ },
  "course-2": { /* course data */ }
}
```

2. The school will automatically appear in:
   - Course selector dropdown
   - Course listing page filters
   - Search results

## Course Data Structure

Each course should have the following structure:

```javascript
{
  id: "unique-identifier",
  title: "Full Course Title",
  subtitle: "Course Subtitle/Description",
  description: "Detailed description",
  duration: "Duration (e.g., '4 Years')",
  level: "Undergraduate|Postgraduate|Doctoral",
  mode: "Full-time|Part-time|Online",
  intake: "Number of students (e.g., '120 Students')",
  fee: "Fee information (e.g., '₹2,50,000 per year')",
  rating: 4.8, // Optional
  reviews: 1247, // Optional
  accreditation: "Accreditation info",
  image: "main course image URL",
  gallery: ["image1.jpg", "image2.jpg"], // Array of images
  highlights: ["highlight1", "highlight2"], // Key features
  eligibility: ["requirement1", "requirement2"], // Eligibility criteria
  career_prospects: ["job1", "job2"], // Career opportunities
  curriculum: [
    {
      semester: "Semester 1",
      subjects: ["subject1", "subject2"]
    }
  ],
  faculty: [
    {
      name: "Dr. Name",
      designation: "Position",
      specialization: "Area of expertise",
      experience: "Years",
      image: "faculty photo URL"
    }
  ],
  facilities: ["facility1", "facility2"],
  testimonials: [
    {
      name: "Student Name",
      batch: "Year",
      company: "Company",
      review: "Review text",
      rating: 5,
      image: "student photo URL"
    }
  ]
}
```

## Components

### CourseDetails
Main component that handles:
- URL parameter parsing
- Data loading
- Error handling
- Loading states

### CourseDetailedLayout
Layout component with:
- Course information display
- Tabbed interface (Overview, Curriculum, Faculty, Facilities)
- Course selector sidebar
- Action buttons (Apply, Download Brochure, Schedule Call)

### CourseSelector
Dropdown component for:
- School selection
- Course navigation within school
- Quick access links

### CourseListing
Search page with:
- Course grid display
- Search functionality
- School filtering
- Responsive design

## Helper Functions

Available in `coursesData.js`:

```javascript
// Get specific course data
getCourseData(school, course)

// Get all courses for a school
getSchoolCourses(school)

// Get all available schools
getAllSchools()

// Search courses by term
searchCourses(searchTerm)
```

## Benefits of This Approach

1. **Scalability**: Easy to add new schools and courses
2. **Maintainability**: Single source of truth for course data
3. **Reusability**: One component handles all courses
4. **SEO**: Clean URLs for each course
5. **User Experience**: Smooth navigation between courses
6. **Performance**: Lazy loading and efficient data structure

## Example Usage

### Adding a New Engineering Course:

```javascript
// In coursesData.js
"engineering": {
  // ... existing courses
  "civil-engineering": {
    id: "civil101",
    title: "B.Tech Civil Engineering",
    subtitle: "Bachelor of Technology in Civil Engineering",
    description: "Comprehensive civil engineering program...",
    duration: "4 Years",
    level: "Undergraduate",
    // ... rest of the course data
  }
}
```

### Linking to the New Course:

```javascript
// Direct URL
/schools/departments/courseDetailed?school=engineering&course=civil-engineering

// Or SEO-friendly URL
/schools/departments/courseDetailed/engineering/civil-engineering
```

## Troubleshooting

### Course Not Found
- Check course slug in URL matches the key in `coursesData.js`
- Ensure school name is correct
- Verify the course data structure is complete

### Selector Not Working
- Check if CourseSelector is imported correctly
- Verify useSearchParams is available
- Ensure router is configured properly

This system now supports unlimited courses across multiple schools while maintaining clean, manageable code!
