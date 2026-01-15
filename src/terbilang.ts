const BILANGAN: string[] = [
  '',
  'Satu',
  'Dua',
  'Tiga',
  'Empat',
  'Lima',
  'Enam',
  'Tujuh',
  'Delapan',
  'Sembilan',
  'Sepuluh',
  'Sebelas',
]

const SCALES = [
  { name: 'Ribu', min: 1000 },
  { name: 'Juta', min: 1000000 },
  { name: 'Milyar', min: 1000000000 },
  { name: 'Triliun', min: 1000000000000 },
  { name: 'Kuadriliun', min: 1000000000000000 },
]

const convert = (num: number): string => {
  if (num < 12) {
    return BILANGAN[num]
  }

  if (num < 20) {
    return `${BILANGAN[num - 10]} Belas`
  }

  if (num < 100) {
    const [depan, belakang] = [Math.floor(num / 10), num % 10]
    return `${BILANGAN[depan]} Puluh${belakang ? ` ${BILANGAN[belakang]}` : ''}`
  }

  if (num < 1000) {
    const [depan, belakang] = [Math.floor(num / 100), num % 100]
    if (num >= 100 && num < 200) {
      return `Seratus${belakang ? ` ${convert(belakang)}` : ''}`
    }
    return `${BILANGAN[depan]} Ratus${belakang ? ` ${convert(belakang)}` : ''}`
  }

  if (num >= 1000 && num < 2000) {
    const belakang = num - 1000
    return `Seribu${belakang ? ` ${convert(belakang)}` : ''}`
  }

  for (const scale of SCALES) {
    if (num >= scale.min) {
      const nextMin = scale.min * 1000
      if (num < nextMin || scale.name === 'Kuadriliun') {
        const [depan, belakang] = [Math.floor(num / scale.min), num % scale.min]
        return `${convert(depan)} ${scale.name}${belakang ? ` ${convert(belakang)}` : ''}`
      }
    }
  }

  return ''
}

export function terbilang(num: number): string {
  if (num === 0) {
    return 'Nol'
  }

  if (isNaN(num) || !isFinite(num)) {
    return ''
  }

  if (!Number.isInteger(num)) {
    throw new Error('terbilang only accepts integer numbers')
  }

  if (Math.abs(num) >= 10 ** 18) {
    throw new Error('terbilang only supports numbers up to 999 Kuadriliun (less than 10^18)')
  }

  if (num < 0) {
    return `Negatif ${convert(Math.abs(num))}`
  }

  return convert(num)
}
