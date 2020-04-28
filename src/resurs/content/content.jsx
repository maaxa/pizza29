import React from "react";
import "./content.css";

const Inform = props => {
  return <p>{props.inf}</p>;
};

const Content = () => {
  let info = [
    {
      address: "г. Северодвинск, ул. Ломоносова, 81, ЦУМ",
      averageCheque: null,
      contact: {
        email: "deliveryff29@gmail.com",
        location: "г. Северодвинск, ул. Ломоносова, 81, ЦУМ",
        phone: "88184501111"
      },
      currencyIsoName: "RUB",
      description: "PIZZA для друзей",
      fullName: "PIZZA для друзей",
      homePage: "pizza29.ru",
      id: "da9e9e43-6afc-11e7-80df-d8d38565926f",
      isActive: true,
      latitude: 64.55035,
      logo: null,
      logoImage: null,
      longitude: 39.78556,
      maxBonus: 0,
      minBonus: 0,
      name: "PIZZA для друзей",
      networkId: null,
      organizationType: 0,
      phone: "88184501111",
      timezone: "Russian Standard Time",
      website: null,
      workTime: null
    }
  ];
  return (
    <div className="content">
      Информация об организации
      <div>id - {info[0].id}</div>
      <div>Название - {info[0].fullName}</div>
      <div>Сайт - {info[0].homePage}</div>
      <div>Телефон - {info[0].phone}</div>
      <div>Почта - {info[0].contact.email}</div>
    </div>
  );
};

export default Content;
