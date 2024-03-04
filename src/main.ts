import './style.css'
import { terbilang } from './terbilang'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Terbilang TS</h1>
    <p>1 = ${terbilang(1)} Rupiah</p>
    <p>10 = ${terbilang(10)} Rupiah</p>
    <p>100 = ${terbilang(100)} Rupiah</p>
    <p>1000 = ${terbilang(1000)} Rupiah</p>
    <p>10000 = ${terbilang(10000)} Rupiah</p>
    <p>100000 = ${terbilang(100000)} Rupiah</p>
    <p>1000000 = ${terbilang(1000000)} Rupiah</p>
  </div>
`
