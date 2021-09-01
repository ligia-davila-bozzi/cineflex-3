import { Baseboard } from "../../components/Baseboard";
import { Header } from "../../components/Header";
import { Seat } from "./Seat";
import "./SelectSeatPage.css"

const SelectSeatPage = () => {
  return (
    <>
      <Header />

      <div className="select-seats">
        <h3>Seleciona o(s) assento(s)</h3>

        <div className="seats">
          {seats.map((seat) => (
            <Seat
              id={seat.id}
              name={seat.name} />
          ))}
        </div>

        <div className="caption-seats">
          <div>
            <div className="seat selected"></div>
            Selecionado
          </div>
          <div>
            <div className="seat "></div>
            Disponível
          </div>
          <div>
            <div className="seat unavailable"></div>
            Indisponível
          </div>
        </div>

        <div className="form">
          <div>
            Nome do comprador:
            <input type="text" placeholder="Digite seu nome..."></input>
          </div>
          <div>
            CPF do comprador:
            <input type="text" placeholder="Digite seu CPF..."></input>
          </div>
          <button>Reservar assento(s)</button>
        </div>
      </div>

      <Baseboard />
    </>
  );
}

const seats = [
  {
    id: 1,
    name: "1",
    isAvailable: false,
  },
  {
    id: 2,
    name: "2",
    isAvailable: true,
  },
  {
    id: 3,
    name: "3",
    isAvailable: true,
  },
  {
    id: 4,
    name: "4",
    isAvailable: true,
  },
  {
    id: 5,
    name: "5",
    isAvailable: true,
  },
  {
    id: 6,
    name: "6",
    isAvailable: true,
  },
  {
    id: 7,
    name: "7",
    isAvailable: true,
  },
  {
    id: 8,
    name: "8",
    isAvailable: true,
  },
  {
    id: 9,
    name: "9",
    isAvailable: true,
  },
  {
    id: 10,
    name: "10",
    isAvailable: true,
  },
  {
    id: 11,
    name: "11",
    isAvailable: true,
  },
  {
    id: 12,
    name: "12",
    isAvailable: true,
  },
  {
    id: 13,
    name: "13",
    isAvailable: true,
  },
  {
    id: 14,
    name: "14",
    isAvailable: true,
  },
  {
    id: 15,
    name: "15",
    isAvailable: true,
  },
  {
    id: 16,
    name: "16",
    isAvailable: true,
  },
  {
    id: 17,
    name: "17",
    isAvailable: true,
  },
  {
    id: 18,
    name: "18",
    isAvailable: true,
  },
  {
    id: 19,
    name: "19",
    isAvailable: true,
  },
  {
    id: 20,
    name: "20",
    isAvailable: true,
  },
  {
    id: 21,
    name: "21",
    isAvailable: true,
  },
  {
    id: 22,
    name: "22",
    isAvailable: true,
  },
  {
    id: 23,
    name: "23",
    isAvailable: true,
  },
  {
    id: 24,
    name: "24",
    isAvailable: true,
  },
  {
    id: 25,
    name: "25",
    isAvailable: true,
  },
  {
    id: 26,
    name: "26",
    isAvailable: true,
  },
  {
    id: 27,
    name: "27",
    isAvailable: true,
  },
  {
    id: 28,
    name: "28",
    isAvailable: true,
  },
  {
    id: 29,
    name: "29",
    isAvailable: true,
  },
  {
    id: 30,
    name: "30",
    isAvailable: true,
  },
  {
    id: 31,
    name: "31",
    isAvailable: true,
  },
  {
    id: 32,
    name: "32",
    isAvailable: true,
  },
  {
    id: 33,
    name: "33",
    isAvailable: true,
  },
  {
    id: 34,
    name: "34",
    isAvailable: true,
  },
  {
    id: 35,
    name: "35",
    isAvailable: true,
  },
  {
    id: 36,
    name: "36",
    isAvailable: true,
  },
  {
    id: 37,
    name: "37",
    isAvailable: true,
  },
  {
    id: 38,
    name: "38",
    isAvailable: true,
  },
  {
    id: 39,
    name: "39",
    isAvailable: true,
  },
  {
    id: 40,
    name: "40",
    isAvailable: true,
  },
  {
    id: 41,
    name: "41",
    isAvailable: true,
  },
  {
    id: 42,
    name: "42",
    isAvailable: true,
  },
  {
    id: 43,
    name: "43",
    isAvailable: true,
  },
  {
    id: 44,
    name: "44",
    isAvailable: true,
  },
  {
    id: 45,
    name: "45",
    isAvailable: true,
  },
  {
    id: 46,
    name: "46",
    isAvailable: true,
  },
  {
    id: 47,
    name: "47",
    isAvailable: true,
  },
  {
    id: 48,
    name: "48",
    isAvailable: true,
  },
  {
    id: 49,
    name: "49",
    isAvailable: true,
  },
  {
    id: 50,
    name: "50",
    isAvailable: true,
  },
]

export { SelectSeatPage }