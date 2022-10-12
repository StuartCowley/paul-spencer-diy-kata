const { getEmployerRole } = require("../src");

describe("getEmployerRole", () => {
  test("returns the employee's role in the company", () => {
    const employees = [
      {
        name: "Satti",
        role: "Developer",
      },
      {
        name: "Jenny",
        role: "Sales Associate",
      },
      {
        name: "Javid",
        role: "Human Recommended Reading Assistant",
      },
      {
        name: "Trev",
        role: "Top Brass",
      },
    ];

    expect(getEmployerRole("Javid", employees)).toEqual("Human Recommended Reading Assistant");
    expect(getEmployerRole("Trev", employees)).toEqual("Top Brass");

  });
});
