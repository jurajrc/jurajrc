import React, { useState } from 'react'
// Style
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { pageAnimation } from '../animations'
// Images
import back_imageXL from '../assets/images/contact/contact-backgroun.webp'
import back_imageL from '../assets/images/contact/contact-backgroun-s.webp'
// Send Email
import emailjs from '@emailjs/browser';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { mixins } from '../components/Theme'
import SendMessage from '../components/contact/SendMessage'
import ErrorMessage from '../components/contact/ErrorMessage'

const Contact: React.FC = () => {
  const [isSend, setIsSend] = useState(false)
  const [sendError, setSendError] =  useState(false)
  
  function sendEmail() {
    emailjs.sendForm(
        'service_y91bs9a', 
        'template_bi8w7le', 
        '#contact-form', 
        'user_d9OyGgUFBHz4YCiT8oJlH')
        .then(res=>{
            //console.log(res);
            setIsSend(!isSend)
        }).catch(err=> {
            console.log(err)
            setSendError(!sendError)
        });
  };

  const validationSchema = yup.object({
    name: yup.string().required("Zabudol si na meno."),
    email: yup.string().email("Skús zadať správny email").required("Ani bez emailu to nepôjde =)."),
    message: yup.string().required("A správa je kde ?")
  });

  const formik = useFormik({
    initialValues: {
        name: "",
        email: "",
        message: ""
    },
    onSubmit:(values => {
        //console.log(JSON.stringify(values))
        sendEmail();
        formik.resetForm();
    }),
    validationSchema: validationSchema,

  });

  return (
    <StyleSection
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
    >

      <AnimatePresence>
        {isSend && <SendMessage toggle={setIsSend} />}
        {sendError && <ErrorMessage toggleError={setSendError} /> }
      </AnimatePresence>
        <div className="content">
          <p className='contact-title'>Napíš mi.</p>

          <form id="contact-form" onSubmit={formik.handleSubmit} >
            <h3>Kontakt</h3>
            <input 
            id="name"
            name="name" 
            type="text"   
            placeholder="Vaše meno" 
            value={formik.values.name}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.name && formik.errors.name ? 
          <p className="error">{formik.errors.name}</p> : null}

          <input 
              id="email"
              name="email" 
              type="email" 
              placeholder="E-mail"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            { formik.touched.email && formik.errors.email ? 
              <p className="error" >{formik.errors.email}</p> : null }

                        
            <textarea 
              id="message" 
              placeholder="Vaša správa" 
              name="message"
              value={formik.values.message}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              cols={30}
              rows={10}
            >
            </textarea>
            { formik.touched.message && formik.errors.message ?
              <p className="error">{formik.errors.message}</p> : null }
                        
            <motion.input 
              whileHover={{
                boxShadow: "0px 0px 10px rgb(0, 0, 0)",
                color: '#fcbd24',
                background: '#444'
              }}
              type="submit" value="Odoslať správu" className="submit"/>
                        
            </form>
        </div>
    </StyleSection>
  )
}
const StyleSection = styled(motion.section) `
    width: 100%;
    background: #bbb;
    overflow: hidden;
    .content {
      max-width: ${mixins.em(1200)};
      max-width: 80%;
      
      min-height: 80vh;
      margin: 0 auto;
      background: url(${back_imageXL});
      background-position: center;
      background-size: cover;

      .contact-title {
        width: 50%;
        margin: 0 auto;
        padding-top: 1.5em;
        border-bottom: 1px solid #000;
      }
      .error {
        color: red;
        padding: 0;
        margin: 0;
      }

      form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        input[type="text"],
        input[type="email"],
        textarea {
          border: 1px solid transparent;
          background: rgba(255, 255, 255, 0.1);
          display: block;
          margin: ${mixins.em(20)} auto 0;
          text-align: center;
          padding: ${mixins.em(5)};
          border-radius: 4px;
          width: ${mixins.em(300)};
          color: #000;
          font-weight: 400;
          outline: none;
          transition: .3s all ease-in-out;
        }
        textarea {
          text-align: left;
          padding: .5em;
          width: ${mixins.em(500)};
        }

        input[type="text"]:focus,
        input[type="email"]:focus {
          
          width: ${mixins.em(360)};
          border: 1px solid #000;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.6);
        }
        textarea:focus {
          width: ${mixins.em(550)};
          border: 1px solid #000;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.6);
        }
        input[type="submit"] {
          background: #333;
          color: #caebe5;
          border: none;
          padding: .5em 2em;
          margin: 1.25em;
          border-radius: 4px;
          cursor: pointer;
          transition: .3s;
        }

        /* input[type="submit"]:hover {
          background: #444;
        } */
      }
      @media screen  and ( max-width: 810px ) {
        max-width: 100%;
        form {
          max-width: ${mixins.em(400)};
          margin: 0 auto;
        }

          form textarea {
            width: ${mixins.em(370)};
          }
          form textarea:focus {
            width: ${mixins.em(390)};
          }
      }

      @media screen  and ( max-width: 450px ) {
        
          background: url(${back_imageL}) no-repeat ;
          background-position: center;
          background-size: cover;
        
        form {
          max-width: ${mixins.em(315)};

          input[type="text"],
          input[type="email"] {
            width:  ${mixins.em(200)};
          }

          input[type="text"]:focus,
          input[type="email"]:focus {
            width:  ${mixins.em(250)};
          }

          textarea {
            width: ${mixins.em(280)};
          }

          textarea:focus {
            width: ${mixins.em(310)};
          }
        }


      }
    }
`

export default Contact