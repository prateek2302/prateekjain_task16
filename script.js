// 1. Array of student objects
const students = [
  {
    name: "Ramesh Singhania",
    marks: 92,
    class: "9th",
    address: "666, VWX Street, Jaipur"
  },
  {
    name: "Rahul Verma",
    marks: 85,
    class: "10th",
    address: "102, Green Avenue, Delhi"
  },
  {
    name: "Radhika Sharma",
    marks: 78,
    class: "9th",
    address: "45, Park View, Mumbai"
  },
  {
    name: "Aman Gupta",
    marks: 88,
    class: "11th",
    address: "12/A, Civil Lines, Jaipur"
  },
  {
    name: "Pooja Mehta",
    marks: 95,
    class: "12th",
    address: "78, Ring Road, Bengaluru"
  },
  {
    name: "Rohan Kapoor",
    marks: 67,
    class: "10th",
    address: "89, Lake City, Udaipur"
  }
];

// DOM references
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const searchTitle = document.getElementById("searchTitle");
const cardsContainer = document.getElementById("studentCardsContainer");

/**
 * Render student records using Array.prototype.map
 * @param {Array} list
 */
function renderStudents(list) {
  if (list.length === 0) {
    cardsContainer.innerHTML = `<p class="no-records">No student records found matching your search.</p>`;
    return;
  }

  // Use map to transform objects into card markup
  const cardsHTML = list
    .map(
      (student) => `
      <div class="student-card">
        <h4 class="card-title">Student: ${student.name}</h4>
        <p class="card-item"><strong>Marks:</strong> ${student.marks}</p>
        <p class="card-item"><strong>Class:</strong> ${student.class}</p>
        <p class="card-item"><strong>Address:</strong> ${student.address}</p>
      </div>
    `
    )
    .join("");

  cardsContainer.innerHTML = cardsHTML;
}

/**
 * Filter students dynamically by name using Array.prototype.filter
 */
function filterStudents() {
  const query = searchInput.value.trim().toLowerCase();

  // Use filter to match student names
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(query)
  );

  // Update section title based on search term
  if (query.length > 0) {
    searchTitle.textContent = `Search Results for "${searchInput.value.trim()}"`;
  } else {
    searchTitle.textContent = "All Students";
  }

  renderStudents(filteredStudents);
}

// Real-time dynamic search while typing
searchInput.addEventListener("input", filterStudents);

// Trigger search when search button is clicked
searchBtn.addEventListener("click", filterStudents);

// Initial render to populate all student records
renderStudents(students);