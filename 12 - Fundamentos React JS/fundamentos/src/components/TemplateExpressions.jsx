//Template Expressions

const TemplateExpressions = () => {
    const name = 'Danillo'
    const data = {
        age: 38,
        job: 'Servidor Público'
    }
  return (
    <div>
        <h3>Bem vindo {name}</h3>
        <p>Sua idade é {data.age} e você é {data.job}</p>
        <p>A soma é {2+2}</p>
    </div>
  )
}

export default TemplateExpressions