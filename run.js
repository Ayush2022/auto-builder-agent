const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("🤖 AutoBuilder AI Agent (GitAgent Runtime Simulation)");
console.log("Type your request:\n");

rl.question("> ", (input) => {

  const text = input.toLowerCase();

  console.log("\n🧠 Processing using skills...\n");

  if (text.includes("build")) {

    console.log("🔹 Skill Used: idea-to-plan + code-generator\n");

    if (text.includes("gym")) {
      console.log("🏋️ Gym Management System:");
      console.log("- Member registration");
      console.log("- QR attendance tracking");
      console.log("- Subscription management");
    }

    else if (text.includes("library")) {
      console.log("📚 Library Management System:");
      console.log("- Book inventory");
      console.log("- Issue/return system");
      console.log("- User tracking");
    }

    else {
      console.log("📦 General Application:");
      console.log("- Authentication system");
      console.log("- Dashboard");
      console.log("- Database integration");
    }

    console.log("\n💻 Suggested Stack:");
    console.log("Frontend: React");
    console.log("Backend: Node.js");
    console.log("Database: MongoDB");
  }

  else if (text.includes("bug") || text.includes("error")) {

    console.log("🔹 Skill Used: project-fixer\n");

    console.log("🔧 Issue Detected:");
    console.log("- Possible validation or logic error");

    console.log("\n✅ Fix Suggested:");
    console.log("- Improve condition checks");
    console.log("- Validate user input properly");
  }

  else {
    console.log("⚡ Available Skills:");
    console.log("- Build applications");
    console.log("- Fix bugs");
    console.log("- Generate plans");
  }

  rl.close();
});