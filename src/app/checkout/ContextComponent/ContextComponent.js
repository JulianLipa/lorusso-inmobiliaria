import React, { useEffect, useState } from "react";
import { useAppContext } from "@/app/contexts/AppContexts";
import styles from "@/app/checkout/page.module.css";
import "@/app/globals.css";
import GalleryView from "@/app/components/GalleryView/GalleryView";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContextComponent = () => {
  const { deptos, setIsDeptosPage } = useAppContext();
  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    setIsDeptosPage(true);
    deptos.map((depto, index) => console.log(depto, index));
  }, [setIsDeptosPage, deptos]);

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Requerido"),
    name: Yup.string().required("Requerido"),
    lastName: Yup.string().required("Requerido"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Submitted:", values);
    setSubmitted(true);
    setSuccessMessage("Tus datos han sido enviados correctamente");
    resetForm();
  };

  return (
    <main className={styles.main}>
      <div className={styles.main_checkout_div}>
        <section className={styles.form_section}>
          <Formik
            initialValues={{
              email: "",
              name: "",
              lastName: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <Field
                  className="subtitle"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="error"
                />

                <Field
                  className="subtitle"
                  type="text"
                  name="name"
                  placeholder="Nombre"
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  className="error"
                />

                <Field
                  className="subtitle"
                  type="text"
                  name="lastName"
                  placeholder="Apellido"
                />
                <ErrorMessage
                  name="lastName"
                  component="p"
                  className="error"
                />

                <button className="subtitle button main_button" type="submit">
                  Enviar
                </button>
              </Form>
            )}
          </Formik>

          {submitted && <p className={styles.successMessage}>{successMessage}</p>}
        </section>

        <section className={styles.cart_section}>
          {deptos && deptos.length > 0 ? (
            deptos.map((depto, index) => (
              <div key={index} className={styles.cart_depto}>
                <div className={styles.galleryiewDiv}>
                  <GalleryView folderName={depto.data.folderName} />
                </div>

                <div className={styles.depto_data_div}>
                  <p className="subtitle">{depto.quantity} x</p>
                  <p className="title">{depto.title}</p>
                  <p className="title">${depto.data.price}</p>
                </div>
              </div>
            ))
          ) : (
            <div className={styles.cart_section_div}>
              <p className="subtitle">
                No agregó ninguna propiedad a su carrito
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default ContextComponent;
