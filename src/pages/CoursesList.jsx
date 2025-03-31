function CoursesList({ courses }) {
    return (
      <div className="courses-list">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <h3>{course.title}</h3>
            <p>Автор: {course.author}</p>
            <button>Записаться</button>
          </div>
        ))}
      </div>
    );
  }
  
  export default CoursesList;
  