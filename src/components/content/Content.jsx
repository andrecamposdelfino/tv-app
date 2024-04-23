import "./style.css"
import Input from "../pesquisa/Input"
import { CgClapperBoard } from "react-icons/cg"


function Content(){

    let treding = [
        {
            id:2,
            titulo:"Rebel Moon 2 : A Marcadora de cicatrizes",
            ano:2024,
            img:"https://imgs.search.brave.com/aXtcsC01Z8R3vk1Jw_4eczh8U3h-Oy6uUVItNyOMNek/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9vYnNl/cnZhdG9yaW9kb2Np/bmVtYS51b2wuY29t/LmJyL3dwLWNvbnRl/bnQvcGx1Z2lucy9z/ZW94LWltYWdlLW1h/Z2ljay9pbWFnaWNr/X2NvbnZlcnQucGhw/P3dpZHRoPTkwNCZo/ZWlnaHQ9NTA4JmZv/cm1hdD0uanBnJnF1/YWxpdHk9OTEmaW1h/Z2ljaz11cGxvYWRz/LW9ic2VydmF0b3Jp/b2RvY2luZW1hLnNl/b3guY29tLmJyLzIw/MjQvMDMvcmViZWwt/bW9vbi0yLWZpbG1l/LTEwMjR4NTc3Lmpw/Zw",
            link:"https://redecanais.mov/rebel-moon-parte-2-a-marcadora-de-cicatrizes-dublado-2024-1080p_fd9ac5f9e.html"
        },
        {
            id:4,
            titulo:"Pica Pau as ferias no acampamento",
            ano:2024,
            img:"https://imgs.search.brave.com/bDvStzLNmDAD22FNVPTbHamUPxH6r1GrZfQNIFTyBw8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50aGVtb3ZpZWRi/Lm9yZy90L3AvdzUz/M19hbmRfaDMwMF9i/ZXN0djIvdzVnNFZh/aWN3NjZMaDdtMFRJ/Q2hoS1o5ZmJqLmpw/Zw",
            link: "https://redecanais.mov/pica-pau-as-ferias-no-acampamento-dublado-2024-1080p_15ec9feb7.html"
        },
        {
            id:10,
            titulo:"Matador de Aluguel",
            ano:2024,
            img:"https://imgs.search.brave.com/sbFNRY8hkC0hZ801_6pNvF8KLc_4Ea8JmJyN8N0sYrg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vY2luZW1h/ZWFmaW5zLmNvbS5i/ci93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NC8wMS9tYXRhZG9y/LWRlLWFsdWd1ZWwt/MjAyNC53ZWJwP2Zp/dD0xMDAwLDYwMCZz/c2w9MQ",
            link:"https://redecanais.mov/matador-de-aluguel-dublado-2024-1080p_0e61430cd.html"
        },
   
    ]

    let recomendados = [
        {
            id:1,
            titulo:"Preson Break",
            ano:2016,
            img:"https://imgs.search.brave.com/wtoVSEWk8QSwm0x9iYD8QC_hwzakKxTzWXUDPpyTfSs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wMi50/cnJzZi5jb20vaW1h/Z2UvZmdldC9jZi83/NzQvMC9pbWFnZXMu/dGVycmEuY29tLzIw/MjMvMTEvMDMvOTMy/Mzg1Mjg3LXByaXNv/bi1icmVhay5qcGc",
            link:"https://redecanais.mov/prison-break-dublado-legendado-lista-de-episodios_dfa13185e.html"
        },
        {
            id:2,
            titulo:"Rebel Moon 2 : A Marcadora de cicatrizes",
            ano:2024,
            img:"https://imgs.search.brave.com/aXtcsC01Z8R3vk1Jw_4eczh8U3h-Oy6uUVItNyOMNek/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9vYnNl/cnZhdG9yaW9kb2Np/bmVtYS51b2wuY29t/LmJyL3dwLWNvbnRl/bnQvcGx1Z2lucy9z/ZW94LWltYWdlLW1h/Z2ljay9pbWFnaWNr/X2NvbnZlcnQucGhw/P3dpZHRoPTkwNCZo/ZWlnaHQ9NTA4JmZv/cm1hdD0uanBnJnF1/YWxpdHk9OTEmaW1h/Z2ljaz11cGxvYWRz/LW9ic2VydmF0b3Jp/b2RvY2luZW1hLnNl/b3guY29tLmJyLzIw/MjQvMDMvcmViZWwt/bW9vbi0yLWZpbG1l/LTEwMjR4NTc3Lmpw/Zw",
            link:"https://redecanais.mov/rebel-moon-parte-2-a-marcadora-de-cicatrizes-dublado-2024-1080p_fd9ac5f9e.html"
        },
        {
            id:3,
            titulo:"O Que Jennifer Fez - 2024",
            ano:2024,
            img:"https://imgs.search.brave.com/sJ4LoJiSd3vEhX-eH_ObYNLJW5eTPGy1RP1KWNFF80E/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vZmxpeGxh/bmRpYS5jb20uYnIv/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MDQvTy1RdWUtSmVu/bmlmZXItRmV6LWNy/aXRpY2EtZG8tZmls/bWUtZG9jdW1lbnRh/cmlvLU5ldGZsaXgt/MjAyNC5qcGc_Zml0/PTEwMjQsNTc2JnNz/bD0x",
            link:"https://redecanais.mov/o-que-jennifer-fez-dublado-2024-1080p_5e47b71e4.html"
        },
        {
            id:4,
            titulo:"Pica Pau as ferias no acampamento",
            ano:2024,
            img:"https://imgs.search.brave.com/bDvStzLNmDAD22FNVPTbHamUPxH6r1GrZfQNIFTyBw8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50aGVtb3ZpZWRi/Lm9yZy90L3AvdzUz/M19hbmRfaDMwMF9i/ZXN0djIvdzVnNFZh/aWN3NjZMaDdtMFRJ/Q2hoS1o5ZmJqLmpw/Zw",
            link: "https://redecanais.mov/pica-pau-as-ferias-no-acampamento-dublado-2024-1080p_15ec9feb7.html"
        },
        {
            id:5,
            titulo:"A Rede Antissocial : dos memes ao caos",
            ano:2024,
            img:"https://imgs.search.brave.com/iFP_cERbfylZH8VeRMRPg3US4Xk9SNhhmgMq2G_LTW8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS50bWRiLm9yZy90/L3AvdzUwMC8xdnp4/TzFLY3diVzd1UEdh/YlR4SjBIS21ZVVMu/anBn",
            link:"https://redecanais.mov/a-rede-antissocial-dos-memes-ao-caos-dublado-2024-1080p_7c4fbc1dc.html"
        },
        {
            id:6,
            titulo:"Parasyte: The Grey",
            ano:2024,
            img:"https://imgs.search.brave.com/nBcSufvvnrbqJR-WCVkk40Bios1lIG03xA6MLOlY2Io/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlpqUXdNRFZt/T0RBdE5EazJPQzAw/T0dOa0xXRXpPVEF0/TnpRME1tTmlaRGhs/Tm1FelhrRXlYa0Zx/Y0dkZVFYVnlOakk0/TkRZNU9ETUAuanBn",
            link:"https://redecanais.mov/parasyte-the-grey-dublado-lista-de-episodios_4f34b5735.html"
        },
        {
            id:7,
            titulo:"Alma de Caçador",
            ano:2024,
            img:"https://imgs.search.brave.com/h3sDU-M6MXGZrnKKnyoC0uWloi2dSzsGoLdMKfD0tu0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS50bWRiLm9yZy90/L3AvdzUwMC8vdkZj/S2xhNDhyOE9VVEtp/U01YblN3S05TVHNu/LmpwZw",
            link:"https://redecanais.mov/alma-de-cacador-dublado-2024-1080p_c1854b827.html"
        },
        {
            id:8,
            titulo:"Bandidagem",
            ano:2024,
            img:"https://imgs.search.brave.com/yaplcTYGB8owGVGdNm9DO3dZQ38eheC0fRABlvchsDw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vZmxpeGxh/bmRpYS5jb20uYnIv/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MDMvQmFuZGlkYWdl/bS1jcml0aWNhLWRh/LXNlcmllLW1leGlj/YW5hLU5ldGZsaXgt/MjAyNC1GbGl4bGFu/ZGlhLTEuanBnP2Zp/dD0xMDI0LDU3NiZz/c2w9MQ",
            link:"https://redecanais.mov/bandidagem-dublado-lista-de-episodios_954853633.html"
        },
        {
            id:9,
            titulo:"Donzela",
            ano:2024,
            img:"https://imgs.search.brave.com/6QabtOoL47tVElwx7C6icPGAC-K95eMj-FLzeym4_5c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90LmN0/Y2RuLmNvbS5ici96/eXktRVJKVHNsbFpW/dm1JVF9HVHI3V1h6/SXc9LzY0MHgzNjAv/c21hcnQvaTg2NjMz/MS5qcGVn",
            link:"https://redecanais.mov/donzela-dublado-2024-1080p_b427baa3b.html"
        },
        {
            id:10,
            titulo:"Matador de Aluguel",
            ano:2024,
            img:"https://imgs.search.brave.com/sbFNRY8hkC0hZ801_6pNvF8KLc_4Ea8JmJyN8N0sYrg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vY2luZW1h/ZWFmaW5zLmNvbS5i/ci93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NC8wMS9tYXRhZG9y/LWRlLWFsdWd1ZWwt/MjAyNC53ZWJwP2Zp/dD0xMDAwLDYwMCZz/c2w9MQ",
            link:"https://redecanais.mov/matador-de-aluguel-dublado-2024-1080p_0e61430cd.html"
        },
        {
            id:11,
            titulo:"Fallout",
            ano:2024,
            img:"https://imgs.search.brave.com/3jDXR5DnylIbT0ogVpaHwsgB-8BpdVWn69mcAqI2irk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zMi10/ZWNodHVkby5nbGJp/bWcuY29tL09VX2lp/cng4REJ6TC1hOU1y/NXpRcTBjM1RKMD0v/MHgwOjEwODB4NjA3/Lzg4OHgwL3NtYXJ0/L2ZpbHRlcnM6c3Ry/aXBfaWNjKCkvaS5z/My5nbGJpbWcuY29t/L3YxL0FVVEhfMDhm/YmY0OGJjMDUyNDg3/Nzk0M2ZlODZlNDMw/ODdlN2EvaW50ZXJu/YWxfcGhvdG9zL2Jz/LzIwMjQvYS9nL3JI/ME1sdlE1S2FmMTda/eVhUaExRL2ZhbGxv/dXQtcG9zdGVyLXBy/aW1lLXZpZGVvLWUx/NzA5ODMwODU3NDU3/LndlYnA",
            link:"https://redecanais.mov/fallout-dublado-lista-de-episodios_f1b3f9a5f.html"
        },
        {
            id:12,
            titulo:"Awareness : A Realidade é uma ilusão",
            ano:2023,
            img:"https://imgs.search.brave.com/x8pmPM1LY15FH56S4lGVw3YeoRaOnmki8HajjSeZT8Q/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pMS5z/bmRjZG4uY29tL2Fy/dHdvcmtzLUJrWlJ6/UkFJZmhkeW1EYUst/NTFTOHNBLXQ1MDB4/NTAwLmpwZw",
            link:"https://redecanais.mov/awareness-a-realidade-e-uma-ilusao-dublado-2023-1080p_d6a575aec.html"
        }
   
    ]



    return(
        <div className="content">
            <Input />
            <h1>Treding</h1>
            <div className="divTreding">
                <dv className="cards">
                    {
                        treding.map(dt => {
                            return(
                                
                                <div className="card" key={dt.id}>
                                    <img src={dt.img} alt="img" />
                                    <h2>{dt.titulo}</h2>

                                    <div className="box-separator">
                                        <CgClapperBoard className="clap"/>
                                        <p>{dt.ano}</p>
                                    </div>
                                    
                                </div>
                                
                            )
                        })
                    }
                </dv>
            </div>

            <h1>Recomendações</h1>
            <div className="recomendacoes">
                <div className="miniCards">
                    {
                        recomendados.map(re => {
                            return (
                                <div className="minicard" key={re.id}>
                                    <img src={re.img} alt="" />
                                    <h2>{re.titulo}</h2>

                                    <div className="box-separator">
                                        <a href={re.link} target="_blanck"><CgClapperBoard className="clap"/></a>
                                        <p>{re.ano}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Content