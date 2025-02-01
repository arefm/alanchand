async function AlanChandAPI() {
  const response = await fetch('https://oq3nq9mpe2.execute-api.eu-west-2.amazonaws.com/default/aws-alanchand-fn');
  return response.json();
}

export default AlanChandAPI
