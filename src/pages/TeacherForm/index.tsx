import React, {useState }from "react";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';


function TeacherForm() {

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' },
  ]);

  function addNewScheduleItem() {

    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: '' }
    ]);
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulario de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input name="name" label="Nome completo" />
          <Input name="avatar" label="avatar" />
          <Input name="whatsapp" label="WhatApp" />
          <Textarea name="bio" label="Biografia" />
        
          
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Select
            name="subject"
            label="Máteria"
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Educação Física', label: 'Educação Física' },
              { value: 'Física', label: 'Física' },
              { value: 'Quimica', label: 'Quimica' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'Historia', label: 'Historia' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português'},
            ]}
          />
          
          <Input name="cost" label="Custo da sua hora por aula" />

        </fieldset>
        
        <fieldset>
          <legend>
            Horários disponiveis
           <button type="button" onClick={addNewScheduleItem} >+ Novo Horario</button>
          </legend>

          {scheduleItems.map(scheduleItem => {
            return (
              <div key={scheduleItem.week_day} onClick={addNewScheduleItem} className="schedule-item">
                <Select
                  name="subject"
                  label="Máteria"
                  options={[
                    { value: 'Artes', label: 'Artes' },
                    { value: 'Biologia', label: 'Biologia' },
                    { value: 'Ciências', label: 'Ciências' },
                    { value: 'Educação Física', label: 'Educação Física' },
                    { value: 'Física', label: 'Física' },
                    { value: 'Quimica', label: 'Quimica' },
                    { value: 'Geografia', label: 'Geografia' },
                    { value: 'Historia', label: 'Historia' },
                    { value: 'Matemática', label: 'Matemática' },
                    { value: 'Português', label: 'Português' },
                  ]}
                />

                <Input name="from" label="Das" type="time" />
                <Input name="to" label="Até" type="time" />
              </div>
            );
          })}
          
        </fieldset>



        <footer>
          <p>
            <img src={warningIcon} alt="Aviso Importante" />
            Importante! <br />
            Preecha todos os dados
          </p>

          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  );
}

export default TeacherForm;