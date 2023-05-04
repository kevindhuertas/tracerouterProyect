export const codigosArchivos: {
  codigoSrc?: string;
  titulo?: string;
  description?: string;
  colabUrl?: string;
  img?: string;
}[] = [
  {
    codigoSrc: "./traceroute.py",
    titulo: "Código para conseguir los datos de traceroute y latencia",
  },
  {
    codigoSrc: "./server_ping.py",
    titulo: "Código para conseguir los datos de latencia",
  },
  {
    codigoSrc: "./bandwidth_curl.py",
    titulo: "Código para obtener el bandwidth con curl",
    colabUrl:
      "https://colab.research.google.com/drive/1EPVoVCD3Bkq7ORrdLSH_vJguPVxMsCJE#scrollTo=R9lg4xuPnoDv",
    img: "./Bandwidth_Curl.png",
  },
];

export const PacketSize: {
  codigoSrc?: string;
  titulo?: string;
  description?: string;
  colabUrl?: string;
  img?: string;
}[] = [
  {
    titulo: "Gráficas del Server, Packet Size",
    colabUrl:
      "https://colab.research.google.com/drive/1jrefFPwT-dZIdGQXVcZCWM301vKUN3Lo?usp=sharing",
  },
  {
    img: "./ServerAndPacketSize/Chile Server, Packet Size.png",
  },
  {
    img: "./ServerAndPacketSize/France Server, Packet Size.png",
  },
  {
    img: "./ServerAndPacketSize/Promedio RTT Server y Packet Size.png",
  },
  {
    img: "./ServerAndPacketSize/Spain Server, Packet Size.png",
  },
  {
    img: "./ServerAndPacketSize/Taiwan Server, Packet Size.png",
  },
];
