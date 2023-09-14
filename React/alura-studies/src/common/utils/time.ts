export function tempoParaSegundos(tempo: string) {
  const [horas = '0', minutos = '0', segundos = '0'] = tempo.split(":");

  const horasEmSegundos = Number(horas) * 3600; //converte horas em segundos
  const minutosEmSegundos = Number(minutos) * 60; //converte minutos em segundos
  return horasEmSegundos + minutosEmSegundos + Number(segundos); //retorna a soma de tudo
}