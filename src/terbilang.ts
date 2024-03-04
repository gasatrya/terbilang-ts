export function terbilang(num: number): string {
  const bilangan: string[] = [
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
  const units: string[] = ['', 'Puluh', 'Ratus', 'Ribu', 'Juta', 'Milyar', 'Triliun', 'Kuadriliun']

  if (num < 12) {
    return bilangan[num]
  }

  if (num < 20) {
    return bilangan[num - 10] + ' Belas'
  }

  if (num < 100) {
    const [depan, belakang] = [Math.floor(num / 10), num % 10]
    return `${bilangan[depan]} ${units[1]}${belakang ? ` ${bilangan[belakang]}` : ''}`
  }

  if (num < 1000) {
    const [depan, belakang] = [Math.floor(num / 100), num % 100]
    if (num >= 100 && num < 200) {
      return `Seratus ${terbilang(num - 100)}`
    }
    return `${bilangan[depan]} ${units[2]}${belakang ? ` ${terbilang(belakang)}` : ''}`
  }

  if (num >= 1000 && num < 2000) {
    return `Seribu ${terbilang(num - 1000)}`
  }

  for (let i = 3; i < units.length; i++) {
    const unitValue = 10 ** (3 * (i - 1))
    if (num < unitValue) {
      const [depan, belakang] = [Math.floor(num / (unitValue / 1000)), num % (unitValue / 1000)]
      const unitName = units[i]
      return `${terbilang(depan)} ${unitName}${belakang ? ` ${terbilang(belakang)}` : ''}`
    }
  }

  return ''
}
