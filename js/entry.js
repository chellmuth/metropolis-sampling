import * as chart from "./chart"

window.run = () => {
  const samples = []

  let x = Math.random()
  for (let i = 0; i < 100000; i++) {
    const next = mutate(x)
    const a = accept(x, next)

    if (Math.random() < a) {
      x = next
    }

    samples.push(x)
  }

  chart.renderHistogram(transformToHistogram(samples), samples.length)
}

function mutate(x) {
  return Math.random()
}

function accept(x, next) {
  return Math.min(1, f(next) / f(x))
}

function f(x) {
  return (x - 0.5) ** 2
}

function transformToHistogram(samples) {
  const binCount = 100
  const histogram = []
  for (let i = 0; i < binCount; i++) {
    histogram.push(0)
  }

  samples.forEach(sample => {
    const bin = Math.floor(sample * binCount)
    histogram[bin] += 1
  })

  return histogram
}
