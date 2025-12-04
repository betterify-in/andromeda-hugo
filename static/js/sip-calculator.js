function calculateSIP() {
  const targetCorpus = parseFloat(document.getElementById('targetCorpus').value);
  const years = parseInt(document.getElementById('years').value);
  const ror = parseFloat(document.getElementById('investmentMode').value);

  if (!targetCorpus || !years || !ror) {
    alert('Please fill all fields');
    return;
  }

  const monthlyRate = ror / 12 / 100;
  const months = years * 12;

  // SIP Formula: P = FV / [((1 + r)^n - 1) / r * (1 + r)]
  const numerator = monthlyRate * targetCorpus;
  const denominator = Math.pow(1 + monthlyRate, months) - 1;
  const monthlySIP = numerator / (denominator * (1 + monthlyRate));

  // Display results
  document.getElementById('resultCorpus').textContent = '₹' + targetCorpus.toLocaleString('en-IN', {maximumFractionDigits: 0});
  document.getElementById('resultYears').textContent = years;
  document.getElementById('resultROR').textContent = ror;
  document.getElementById('monthlySIP').textContent = '₹' + monthlySIP.toLocaleString('en-IN', {maximumFractionDigits: 2});
  document.getElementById('result').style.display = 'block';
}

// Allow Enter key to calculate
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('sipCalculatorForm').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      calculateSIP();
    }
  });
});