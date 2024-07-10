// Fake data
const eventDetails = {
    title: "Tech Conference 2024",
    date: "July 10, 2024",
    description: "A virtual conference to explore the latest trends in technology.",
  };
  
  const qaSessions = [
    {
      question: "What is the future of AI?",
      answer: "The future of AI is very promising with advancements in machine learning, natural language processing, and robotics.",
    },
    {
      question: "How does blockchain ensure security?",
      answer: "Blockchain ensures security through decentralization, cryptographic hashing, and consensus mechanisms.",
    },
  ];
  
  const networkingOpportunities = [
    {
      name: "Developer Meetup",
      description: "A space for developers to connect and share ideas.",
    },
    {
      name: "Tech Leaders Roundtable",
      description: "A discussion forum for industry leaders to talk about future trends.",
    },
  ];
  // Sample events data
  const events = [
    { title: 'Tech Conference 2024', date: '2024-07-10' },
    { title: 'Developer Meetup', date: '2024-07-11' }
  ];
  
  // Render calendar
  function renderEventCalendar() {
    const calendar = document.getElementById('event-calendar');
    events.forEach(event => {
      const eventElement = document.createElement('div');
      eventElement.textContent = `${event.title} - ${event.date}`;
      calendar.appendChild(eventElement);
    });
  }
  
  // Set reminder for an event
  function setEventReminder(eventDate) {
    const reminderTime = new Date(eventDate).getTime() - (24 * 60 * 60 * 1000); // 24 hours before event
    const currentTime = new Date().getTime();
    const timeUntilReminder = reminderTime - currentTime;
    
    if (timeUntilReminder > 0) {
      setTimeout(() => {
        document.getElementById('reminder-notification').classList.remove('hidden');
      }, timeUntilReminder);
    }
  }
  
  events.forEach(event => setEventReminder(event.date));
  
  document.getElementById('close-reminder-btn').addEventListener('click', () => {
    document.getElementById('reminder-notification').classList.add('hidden');
  });
  
  // Function to render event details
  function renderEventDetails() {
    const eventInfo = document.getElementById("event-info");
    eventInfo.innerHTML = `
      <h3 class="text-xl font-bold text-blue-600">${eventDetails.title}</h3>
      <p class="text-gray-600">${eventDetails.date}</p>
      <p>${eventDetails.description}</p>
    `;
  }
  
  // Fake data for live polls
  const polls = [
    {
      question: "What is your favorite programming language?",
      options: ["JavaScript", "Python", "Java", "C#"],
      votes: [25, 15, 10, 20], // Fake initial votes for each option
      chosenOption: -1, // Track chosen option (-1 means no option chosen initially)
    },
    {
      question: "Which technology are you most excited about?",
      options: ["AI", "Blockchain", "IoT", "AR/VR"],
      votes: [30, 10, 15, 25], // Fake initial votes for each option
      chosenOption: -1, // Track chosen option (-1 means no option chosen initially)
    },
  ];
  
  // Function to render live polls with interactive choices
  function renderLivePolls() {
    const pollsContainer = document.getElementById("polls-container");
  
    polls.forEach((poll, pollIndex) => {
      const pollElement = document.createElement("div");
      pollElement.classList.add("mb-4");
      pollElement.innerHTML = `
        <h4 class="font-semibold text-lg">${poll.question}</h4>
        <div id="poll-options-${pollIndex}" class="mt-2 space-y-2"></div>
      `;
      pollsContainer.appendChild(pollElement);
  
      const pollOptionsContainer = document.getElementById(`poll-options-${pollIndex}`);
  
      // Render options with buttons
      poll.options.forEach((option, optionIndex) => {
        const optionButton = document.createElement("button");
        optionButton.classList.add(
          "poll-option",
          "bg-blue-500",
          "text-white",
          "px-4",
          "py-2",
          "m-2",
          "rounded",
          "hover:bg-blue-600",
          "transition"
        );
        optionButton.textContent = option;
        pollOptionsContainer.appendChild(optionButton);
  
        // Event listener for option button click
        optionButton.addEventListener("click", () => {
          // If an option is already chosen, return
          if (poll.chosenOption !== -1) return;
  
          // Mark the chosen option and disable further interaction
          poll.chosenOption = optionIndex;
          optionButton.classList.add("chosen");
  
          // Update UI to show percentage for all options
          updatePollUI(poll, pollIndex);
        });
      });
    });
  }
  
  // Function to update the UI with percentage after a choice is made
  function updatePollUI(poll, pollIndex) {
    const pollOptionsContainer = document.getElementById(`poll-options-${pollIndex}`);
  
    // Calculate total votes
    const totalVotes = poll.votes.reduce((acc, curr) => acc + curr, 0);
  
    // Update each option with percentage
    poll.options.forEach((option, optionIndex) => {
      const percentage =
        totalVotes === 0
          ? 0
          : ((poll.votes[optionIndex] / totalVotes) * 100).toFixed(2);
      const optionButton = pollOptionsContainer.children[optionIndex];
  
      // Show percentage only for chosen option, highlight it
      if (optionIndex === poll.chosenOption) {
        optionButton.textContent = `${option} (${percentage}%)`;
        optionButton.classList.add("chosen");
      } else {
        optionButton.textContent = option;
        optionButton.disabled = true; // Disable other options
      }
    });
  }
  
  // Function to render Q&A sessions
  function renderQASessions() {
    const qaContainer = document.getElementById("qa-container");
    qaSessions.forEach((qa) => {
      const qaElement = document.createElement("div");
      qaElement.classList.add("mb-4");
      qaElement.innerHTML = `
        <h4 class="font-semibold text-lg">${qa.question}</h4>
        <p>${qa.answer}</p>
      `;
      qaContainer.appendChild(qaElement);
    });
  }
  
  // Function to render networking opportunities
  function renderNetworkingOpportunities() {
    const networkingContainer = document.getElementById("networking-container");
    networkingOpportunities.forEach((networking) => {
      const networkingElement = document.createElement("div");
      networkingElement.classList.add("mb-4");
      networkingElement.innerHTML = `
        <h4 class="font-semibold text-lg">${networking.name}</h4>
        <p>${networking.description}</p>
      `;
      networkingContainer.appendChild(networkingElement);
    });
  }
  
  // Function to change hero background
  const images = [
    "https://funds2orgs.com/wp-content/uploads/2022/03/Volunteer-event-management.jpg",
    "https://www.agilitypr.com/wp-content/uploads/2020/09/virtual-1.jpg",
    "https://webbiquity.com/wp-content/uploads/2020/08/Teooh-virtual-conference-scaled.jpg",
    "https://veekast.com/wp-content/uploads/2021/02/2020.10_mktg_BlogHeader_VirtualEvents_AP.png",
  ];
  
  const preloadedImages = images.map((src) => {
    const img = new Image();
    img.src = src;
    return img;
  });
  
  function changeHeroBackground() {
    const heroSection = document.getElementById("hero-section");
    let index = 1;
    heroSection.style.backgroundImage = `url(${preloadedImages[0].src})`;
    setInterval(() => {
      heroSection.style.backgroundImage = `url(${preloadedImages[index].src})`;
      index = (index + 1) % preloadedImages.length;
    }, 5000); // Change image every 5 seconds
  }
  
  // Render all sections on page load
  window.onload = () => {
    renderEventDetails();
    renderLivePolls();
    renderQASessions();
    renderNetworkingOpportunities();
    changeHeroBackground();
  
    // Add event listeners for navigation buttons
    document.getElementById("home-button").addEventListener("click", () => {
      document.getElementById("hero-section").scrollIntoView({ behavior: 'smooth' });
    });
  
    document.getElementById("events-button").addEventListener("click", () => {
      document.getElementById("event-details").scrollIntoView({ behavior: 'smooth' });
    });
  
    document.getElementById("polls-button").addEventListener("click", () => {
      document.getElementById("live-polls").scrollIntoView({ behavior: 'smooth' });
    });
  
    document.getElementById("qa-button").addEventListener("click", () => {
      document.getElementById("qa-sessions").scrollIntoView({ behavior: 'smooth' });
    });
  
    document.getElementById("networking-button").addEventListener("click", () => {
      document.getElementById("networking-opportunities").scrollIntoView({ behavior: 'smooth' });
    });
  };
  
  // Chat functionality
  document.getElementById("chat-send").addEventListener("click", () => {
    const chatInput = document.getElementById("chat-input");
    const chatContainer = document.getElementById("chat-container");
    const message = chatInput.value;
    if (message.trim()) {
      const messageElement = document.createElement("div");
      messageElement.classList.add("mb-2");
      messageElement.innerHTML = `<span class="font-bold text-green-600">You:</span> <span>${message}</span>`;
      chatContainer.appendChild(messageElement);
      chatInput.value = "";
      chatContainer.scrollTop = chatContainer.scrollHeight; // Scroll to bottom
    }
  });
  document.addEventListener("DOMContentLoaded", () => {
    const authModal = document.getElementById("auth-modal");
    const loginBtn = document.getElementById("login-btn");
    const JoinBtn = document.getElementById("join-btn");
    const closeModal = document.getElementById("close-modal");
    const switchAuth = document.getElementById("switch-auth");
    const authTitle = document.getElementById("auth-title");
    const authForm = document.getElementById("auth-form");
    JoinBtn.addEventListener("click", () => {
      authModal.classList.remove("hidden");
      authTitle.textContent = "Login";
      switchAuth.textContent = "Don't have an account? Register here";
    });
  
    loginBtn.addEventListener("click", () => {
      authModal.classList.remove("hidden");
      authTitle.textContent = "Login";
      switchAuth.textContent = "Don't have an account? Register here";
    });
  
    closeModal.addEventListener("click", () => {
      authModal.classList.add("hidden");
    });
  
    switchAuth.addEventListener("click", () => {
      if (authTitle.textContent === "Login") {
        authTitle.textContent = "Register";
        switchAuth.textContent = "Already have an account? Login here";
      } else {
        authTitle.textContent = "Login";
        switchAuth.textContent = "Don't have an account? Register here";
      }
    });
  
    authForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // Add your form submission logic here
      authModal.classList.add("hidden");
    });
  });
  
  // Function to switch to light mode
  function switchToLightMode() {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light'); // Save theme preference
  }
  
  // Function to switch to dark mode
  function switchToDarkMode() {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark'); // Save theme preference
  }
  
  // Check for saved theme preference on page load
  document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
    }
  
    // Add event listeners to the theme buttons
    document.getElementById('light-mode').addEventListener('click', switchToLightMode);
    document.getElementById('dark-mode').addEventListener('click', switchToDarkMode);
  });