import { createAgent } from "gitclaw";

async function main() {
  const agent = await createAgent({
    path: "./"
  });

  const response = await agent.run({
    input: "Build a gym management system with QR attendance"
  });

  console.log("\n🤖 Agent Output:\n");
  console.log(response);
}

main();