async function AlanChandAPI(currencies = []) {
  let lambdaFnApiGateway = 'https://oq3nq9mpe2.execute-api.eu-west-2.amazonaws.com/default/aws-alanchand-fn'
  if (currencies.length > 0) {
    lambdaFnApiGateway += `?currencies=${currencies.join(',')}`
  }

  const response = await fetch(lambdaFnApiGateway);
  return response.json();
}

export default AlanChandAPI
