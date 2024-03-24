function calculateNetSalary(basicSalary, benefits) {
    // Constants for tax brackets, NHIF rates, and NSSF rates
    const taxBrackets = [
      { min: 0, max: 24000, rate: 0.1 },
      { min: 24001, max: 32333, rate: 0.25 },
      { min: 32334, max: 45666, rate: 0.3 },
      { min: 45667, max: 58888, rate: 0.35 },
      { min: 58889, max: Infinity, rate: 0.37 },
    ];
    const nhifRates = [
      { min: 0, max: 5999, rate: 150 },
      { min: 6000, max: 7999, rate: 300 },
      { min: 8000, max: 11999, rate: 400 },
      { min: 12000, max: 14999, rate: 500 },
      { min: 15000, max: 19999, rate: 600 },
      { min: 20000, max: 24999, rate: 750 },
      { min: 25000, max: 29999, rate: 850 },
      { min: 30000, max: 34999, rate: 950 },
      { min: 35000, max: 39999, rate: 1050 },
      { min: 40000, max: 44999, rate: 1150 },
      { min: 45000, max: 49999, rate: 1250 },
      { min: 50000, max: 59999, rate: 1350 },
      { min: 60000, max: 69999, rate: 1500 },
      { min: 70000, max: 79999, rate: 1650 },
      { min: 80000, max: 89999, rate: 1850 },
      { min: 90000, max: 99999, rate: 2000 },
      { min: 100000, max: Infinity, rate: 2250 },
    ];
    const nssfRate = 0.06;
}
  
    // Calculate gross salary
    const grossSalary = basicSalary + benefits;
  
    // Calculate tax
    let totalTax = 0;
    for (const bracket of taxBrackets) {
      if (grossSalary <= bracket.max) {
        totalTax += (grossSalary - bracket.min) * bracket.rate;
        break;
      }
      totalTax += (bracket.max - bracket.min) * bracket.rate;
    }  