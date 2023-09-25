// respostas em questões
const answers = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
}

// Array de perguntas
const questions = [
  {
    question: "Quando você enfrenta um problema, qual é a sua abordagem?",
    options: [
      "Analisar cuidadosamente os detalhes antes de tomar uma decisão",
      "Procurar maneiras de conciliar diferentes pontos de vista",
      "Seguir um plano passo a passo para resolvê-lo",
      "Tentar várias abordagens diferentes até encontrar uma solução",
    ],
  },
  {
    question:
      "Como você costuma se sentir em grandes festas ou eventos sociais?",
    options: [
      "Prefiro conversas profundas com um pequeno grupo de pessoas",
      "Gosto de conhecer novas pessoas e conversar com diferentes grupos.",
      "Sinto-me confortável em eventos sociais e gosto de seguir as tradições.",
      "Adoro estar no centro das atenções e ser o animador da festa.",
    ],
  },
  {
    question: "Qual destas palavras mais se aproxima de como você se vê?",
    options: ["Lógico(a)", "Empático(a)", "Disciplinado(a)", "Aventureiro(a)"],
  },
  {
    question: "Como você lida com prazos e metas?",
    options: [
      "Planejo e organizo meu tempo meticulosamente para atingir meus objetivos.",
      "Sou flexível e ajusto meu plano conforme necessário.",
      "Gosto de cumprir prazos, mas fico desconfortável com mudanças.",
      "Aproximo-me das metas de maneira espontânea e criativa.",
    ],
  },
  {
    question: "Como você costuma se comportar em situações de conflito?",
    options: [
      "Procuro a raiz do problema e tento resolvê-lo de maneira lógica",
      "Tento mediar e encontrar um terreno comum.",
      "Defendo meus princípios e valores firmemente.",
      "Evito conflitos e tento manter a paz.",
    ],
  },
  {
    question:
      "Qual é a sua abordagem em relação a mudanças e novas experiências?",
    options: [
      "Prefiro o que é familiar e previsível.",
      "Gosto de experimentar coisas novas, desde que seja emocionante.",
      "Fico confortável com mudanças moderadas, mas não gosto de surpresas.",
      "Abraço mudanças e busco aventuras constantemente.",
    ],
  },
  {
    question: "Como você toma decisões importantes?",
    options: [
      "Analiso todas as opções e suas consequências antes de decidir.",
      "Levo em consideração meus sentimentos e valores pessoais.",
      "Sigo as regras e tradições estabelecidas",
      "Confio no meu instinto e intuição.",
    ],
  },
  {
    question: "Como você se sente em relação a regras e regulamentos?",
    options: [
      "Acredito que as regras são necessárias para manter a ordem.",
      "Vejo valor nas regras, mas acho que às vezes podem ser flexíveis.",
      "Respeito e sigo as regras rigorosamente.",
      "Às vezes, as regras podem ser um obstáculo à criatividade.",
    ],
  },
  {
    question: "Como você lida com desafios imprevistos?",
    options: [
      "Mantenho a calma e tento encontrar uma solução lógica.",
      "Levo em consideração meus valores e princípios antes de agir.",
      "Sigo procedimentos estabelecidos para lidar com eles.",
      "Encaro os desafios como oportunidades emocionantes.",
    ],
  },
  {
    question: "Como você se sente em relação a rotinas diárias?",
    options: [
      "Gosto de ter uma rotina estruturada e planejada.",
      "Prefiro uma rotina flexível que me permita adaptar-me às circunstâncias.",
      "Sigo uma rotina rigorosa e me sinto confortável com isso.",
      "Rotinas me entediam; prefiro a espontaneidade.",
    ],
  },

  // Adicione mais perguntas aqui
]

let currentQuestion = 0 // Índice da pergunta atual

const questionElement = document.querySelector(".question")
const nextButton = document.querySelector("#next-btn")

// Função para exibir a pergunta atual
function showQuestion() {
  const current = questions[currentQuestion]
  questionElement.querySelector("h1").textContent = current.question

  const optionsList = questionElement.querySelector("ul")
  optionsList.innerHTML = ""

  current.options.forEach((option) => {
    const li = document.createElement("li")
    const input = document.createElement("input")
    input.type = "radio"
    input.name = "answer"
    input.value = option
    li.appendChild(input)
    li.appendChild(document.createTextNode(option))
    optionsList.appendChild(li)
  })
}

// Verificar a resposta e avançar para a próxima pergunta
nextButton.addEventListener("click", () => {
  // resposta selecionada
  const selectedOption = document.querySelector('input[name="answer"]:checked')
  if (selectedOption) {
    const userAnswer = selectedOption.value
    const currentQuestionOBJ = questions[currentQuestion]
    const availableAnswers = currentQuestionOBJ.options
    const userAnswerIndex = availableAnswers.findIndex((answer) => {
      if (answer === userAnswer) {
        return true
      } else {
        return false
      }
    })

    answers[userAnswerIndex] += 1

    console.log(answers)
    currentQuestion++

    if (currentQuestion < questions.length) {
      showQuestion()
    } else {
      // O quiz terminou, você pode exibir uma mensagem ou redirecionar o usuário
      let maiorValor = -Infinity // Inicializa com o menor valor possível
      let maisRespostas = 0

      for (const chave in answers) {
        if (answers.hasOwnProperty(chave)) {
          const valor = answers[chave]
          if (valor > maiorValor) {
            maiorValor = valor
            maisRespostas = chave
          }
        }
      }

      alert(`Quiz finalizado! Parabéns! Você respondeu: ${maisRespostas} `)

      window.location = `/resultado.html?maisRespostas=${maisRespostas}`
    }
  } else {
    // O usuário não selecionou uma resposta
    alert("Por favor, selecione uma resposta.")
  }
})

// Mostrar a primeira pergunta ao carregar a página
showQuestion()
