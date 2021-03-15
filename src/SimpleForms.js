import React, { Component, useState } from "react";
import ChatBot from "react-simple-chatbot";
import notificacion from "./img/chatbot/chatbot2.png";

const SimpleForm = () => {
  const [showChatBot, setShowChatBot] = useState(false);
  return (
    <div
      style={{
        margin: 10,
        top: "auto",
        right: 20,
        bottom: 20,
        left: "auto",
        position: "fixed",
        floating: true,
        color: "#FFFFFF",
      }}
    >
      {showChatBot && (
        <ChatBot
          steps={[
            {
              id: "bienvenida",
              message:
                "¡Hola! Soy Bell, el asistente virtual de BellHouse ¡Estoy para ayudarte!",
              trigger: "1",
            },
            {
              id: "1",
              message: "Elige una opcion",
              options: [
                { value: 1, label: "Buscar productos", trigger: "product" },
                { value: 2, label: "Estado de compra", trigger: "estado" },
                { value: 3, label: "Mis compras", trigger: "compras" },
                { value: 4, label: "Sugerencias", trigger: "sugerencia" },
              ],
              trigger: "2",
            },

            {
              id: "2",
              options: [
                { value: 1, label: "Buscar productos", trigger: "product" },
                { value: 2, label: "Estado de compra", trigger: "estado" },
                { value: 3, label: "Mis compras", trigger: "compras" },
                { value: 4, label: "Sugerencias", trigger: "sugerencia" },
              ],
            },

            {
              id: "product",
              message: "Elige una opcion",
              options: [
                { value: 1, label: "Laptops", trigger: "lap" },
                { value: 2, label: "Mobile", trigger: "mob" },
                { value: 3, label: "Tablets", trigger: "tab" },
                { value: 3, label: "Impresoras", trigger: "Impresoras" },
              ],
              trigger: "mostrar productos",
            },

            {
              id: "mostrar productos",
              options: [
                { value: 1, label: "Laptops", trigger: "oferta" },
                { value: 2, label: "Mobile", trigger: "oferta" },
                { value: 3, label: "Tablets", trigger: "oferta" },
                { value: 3, label: "Impresoras", trigger: "oferta" },
              ],
              trigger: "oferta",
            },

            {
              id: "oferta",
              message: "¡Tenemos un 20% por campaña escolar!",
            },

            {
              id: "estado",
              message:
                "Consulta el estado de tu compra, ingresando tu numero de orden",
              trigger: "ingreso cod",
            },

            {
              id: "ingreso cod",
              user: true,
              trigger: "verif",
            },

            {
              id: "verif",
              message: "Correcto, lo estamos verificando ...",
            },

            {
              id: "compras",
              message: "¿En que puedo ayudarte?, elige una opcion:",
              options: [
                { value: 1, label: "Estado de mi compra", trigger: "estado" },
                { value: 2, label: "Sugerencia o reclamos", trigger: "sug" },
                { value: 3, label: "¿Algun problema?", trigger: "question" },
              ],
              trigger: "opc compras",
            },

            {
              id: "opc compras",
              options: [
                { value: 1, label: "Estado de mi compra", trigger: "estado" },
                {
                  value: 2,
                  label: "Sugerencia o reclamos",
                  trigger: "sugerencia",
                },
                { value: 3, label: "¿Algun problema?", trigger: "sugerencia" },
              ],
            },

            {
              id: "sugerencia",
              message:
                "Realiza tus comentarios, sugerencias y reclamos llamando a nuestro Servicio al cliente:",
              trigger: "part2",
            },

            {
              id: "part2",
              message: "(01)4192000 (01)6310300",
              end: true,
            },
          ]}
        />
      )}
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "flex-end",
          flexDirection: "column",
        }}
      >
        <div
          onClick={() => setShowChatBot(!showChatBot)}
          style={{
            borderRadius: "50%",
            minHeight: "50px",
            minWidth: "50px",
            maxWidth: "50px",
            maxWidth: "50px",
            backgroundColor: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            style={{ width: "80px", height: "80px" }}
            src={notificacion}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default SimpleForm;
