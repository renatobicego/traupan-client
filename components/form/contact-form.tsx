"use client";

import { Button } from "@heroui/button";
import { Form } from "@heroui/form";
import { Input, Textarea } from "@heroui/input";
import { addToast } from "@heroui/toast";
import useWeb3forms from "@web3forms/react";
import React from "react";
import { useForm } from "react-hook-form";
const ContactForm = () => {
  const { handleSubmit, register } = useForm();
  const { submit: onSubmit } = useWeb3forms({
    access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "",
    settings: {
      from_name: "Traupan Web",
      subject: "Nuevo mensaje de contacto",
    },
    onSuccess: () => {
      addToast({
        title: "Mensaje enviado",
        description:
          "Gracias por contactarnos, nos pondremos en contacto pronto.",
        color: "success",
      });
    },
    onError: () => {
      addToast({
        title: "Error al enviar el mensaje",
        description: "Por favor, intente nuevamente más tarde.",
        color: "danger",
      });
    },
  });
  return (
    <Form
      className="flex w-full flex-col gap-4 lg:w-3/4 xl:w-1/2 bg-secondary px-6 md:px-12 py-8 rounded-2xl"
      onSubmit={handleSubmit(onSubmit)}
      id="contacto"
    >
      <h5 className="heading4 text-white">Formulario de Contacto</h5>
      <div className="flex w-full items-center gap-4 max-md:flex-col">
        <Input
          variant="bordered"
          classNames={{
            input: "text-white placeholder:text-white",
            label: "!text-white/80",
            inputWrapper:
              "border-white/60 group-data-[focus=true]:border-white",
          }}
          isRequired
          radius="lg"
          errorMessage="Por favor, ingrese su nombre completo"
          label="Nombre Completo"
          placeholder="Ingrese su nombre completo"
          type="text"
          {...register("nombre", { required: true })}
        />
        <Input
          variant="bordered"
          classNames={{
            input: "text-white placeholder:text-white",
            label: "!text-white/80",
            inputWrapper:
              "border-white/60 group-data-[focus=true]:border-white",
          }}
          isRequired
          radius="lg"
          errorMessage="Por favor, ingrese un teléfono válido"
          label="Número de Teléfono"
          {...register("telefono", { required: true })}
          placeholder="Ingrese su número de teléfono"
          type="tel"
        />
      </div>
      <div className="flex w-full items-center gap-4 max-md:flex-col">
        <Input
          variant="bordered"
          classNames={{
            input: "text-white placeholder:text-white",
            label: "!text-white/80",
            inputWrapper:
              "border-white/60 group-data-[focus=true]:border-white",
          }}
          isRequired
          radius="lg"
          errorMessage="Por favor, ingrese un correo electrónico válido"
          label="Correo Electrónico"
          {...register("email", { required: true })}
          placeholder="Ingrese su correo electrónico"
          type="email"
        />
      </div>
      <Textarea
        variant="bordered"
        classNames={{
          input: "text-white placeholder:text-white",
          label: "!text-white/80",
          inputWrapper: "border-white/60 group-data-[focus=true]:border-white",
        }}
        isRequired
        radius="lg"
        errorMessage="Por favor, ingrese su consulta"
        label="Consulta"
        {...register("mensaje", { required: true })}
        placeholder="Ingrese su consulta"
        type="text"
        className="w-full"
      />
      <Button color="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
};

export default ContactForm;
