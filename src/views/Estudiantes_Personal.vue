<template>
  <div class="container-fluid col-sm-6 text-start">
    <form @submit.prevent="submitForm">
      <div class="">
        <div class="card border-dark mb-3">
          <div class="card-header">
            <i class="fab fa-quora fa-2x">:1&nbsp;</i>¿Siente fiebre,
            escalofríos como los de una gripe, o una fiebre con una temperatura
            tomada por la boca de 38,1°C (100,6°F) o más?
          </div>
          <div class="card-body text-dark">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r1"
                id="flexRadioDefault1"
                value= true
                v-model="r1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                si
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r1"
                id="flexRadioDefault2"
                value = false
                checked
                 v-model="r1"
              />
              <label class="form-check-label" for="flexRadioDefault2">
                no
              </label>
            </div>
          </div>
        </div>

        <div class="card border-dark mb-3">
          <div class="card-header">
            <i class="fab fa-quora fa-2x">:2&nbsp;</i>¿Ha tenido una pérdida
            repentina del olfato sin congestión nasal (nariz tapada), con o sin
            pérdida del gusto?
          </div>
          <div class="card-body text-dark">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r2"
                id="flexRadioDefault1"
                value= true
                
               
                v-model="r2"
               
              />
              <label class="form-check-label" for="flexRadioDefault1">
                si
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r2"
                id="flexRadioDefault2"
                value = false
               
                 v-model="r2"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                no
              </label>
            </div>
          </div>
        </div>

        <div class="card border-dark mb-3">
          <div class="card-header">
            <i class="fab fa-quora fa-2x">:3&nbsp;</i>¿Ha desarrollado una tos o
            su tos crónica ha empeorado recientemente?
          </div>
          <div class="card-body text-dark">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r3"
                id="flexRadioDefault1"
                value= true
                
               
                v-model="r3"
               
              />
              <label class="form-check-label" for="flexRadioDefault1">
                si
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r3"
                id="flexRadioDefault2"
                value = false
               
                 v-model="r3"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                no
              </label>
            </div>
          </div>
        </div>

        <div class="card border-dark mb-3">
          <div class="card-header">
            <i class="fab fa-quora fa-2x">:4&nbsp;</i>¿Tiene problemas al
            respirar o le falta el aliento?
          </div>
          <div class="card-body text-dark">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r4"
                id="flexRadioDefault1"
                value= true
                
               
                v-model="r4"
               
              />
              <label class="form-check-label" for="flexRadioDefault1">
                si
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r4"
                id="flexRadioDefault2"
                value = false
               
                 v-model="r4"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                no
              </label>
            </div>
          </div>
        </div>

        <div class="card border-dark mb-3">
          <div class="card-header">
            <i class="fab fa-quora fa-2x">:5&nbsp;</i>¿Tiene dolor de garganta?
          </div>
          <div class="card-body text-dark">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r5"
                id="flexRadioDefault1"
                value= true
                
               
                v-model="r5"
               
              />
              <label class="form-check-label" for="flexRadioDefault1">
                si
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r5"
                id="flexRadioDefault2"
                value = false
               
                 v-model="r5"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                no
              </label>
            </div>
          </div>
        </div>

        <div class="card border-dark mb-3">
          <div class="card-header">
            <i class="fab fa-quora fa-2x">:6&nbsp;</i>¿Tiene secreción o
            congestión nasal de causa desconocida?
          </div>
          <div class="card-body text-dark">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r6"
                id="flexRadioDefault1"
                value= true
                
               
                v-model="r6"
               
              />
              <label class="form-check-label" for="flexRadioDefault1">
                si
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r6"
                id="flexRadioDefault2"
                value = false
               
                 v-model="r6"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                no
              </label>
            </div>
          </div>
        </div>

        <div class="card border-dark mb-3">
          <div class="card-header">
            <i class="fab fa-quora fa-2x">:7&nbsp;</i>Dolor de estómago
          </div>
          <div class="card-body text-dark">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r7"
                id="flexRadioDefault1"
                value= true
                
               
                v-model="r7"
               
              />
              <label class="form-check-label" for="flexRadioDefault1">
                si
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r7"
                id="flexRadioDefault2"
                value = false
               
                 v-model="r7"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                no
              </label>
            </div>
          </div>
        </div>

        <div class="card border-dark mb-3">
          <div class="card-header">
            <i class="fab fa-quora fa-2x">:8&nbsp;</i>Náuseas o vómitos
          </div>
          <div class="card-body text-dark">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r8"
                id="flexRadioDefault1"
                value= true
                
               
                v-model="r8"
               
              />
              <label class="form-check-label" for="flexRadioDefault1">
                si
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r8"
                id="flexRadioDefault2"
                value = false
               
                 v-model="r8"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                no
              </label>
            </div>
          </div>
        </div>

        <div class="card border-dark mb-3">
          <div class="card-header">
            <i class="fab fa-quora fa-2x">:9&nbsp;</i>Diarrea
          </div>
          <div class="card-body text-dark">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r9"
                id="flexRadioDefault1"
                value= true
                
               
                v-model="r9"
               
              />
              <label class="form-check-label" for="flexRadioDefault1">
                si
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r9"
                id="flexRadioDefault2"
                value = false
               
                 v-model="r9"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                no
              </label>
            </div>
          </div>
        </div>

        <div class="card border-dark mb-3">
          <div class="card-header">
            <i class="fab fa-quora fa-2x">:10&nbsp;</i>Fatiga inusualmente
            intensa sin razón obvia
          </div>
          <div class="card-body text-dark">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r10"
                id="flexRadioDefault1"
                value= true
                
               
                v-model="r10"
               
              />
              <label class="form-check-label" for="flexRadioDefault1">
                si
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r10"
                id="flexRadioDefault2"
                value = false
               
                 v-model="r10"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                no
              </label>
            </div>
          </div>
        </div>

        <div class="card border-dark mb-3">
          <div class="card-header">
            <i class="fab fa-quora fa-2x">:11&nbsp;</i>Pérdida significativa de
            apetito
          </div>
          <div class="card-body text-dark">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r11"
                id="flexRadioDefault1"
                value= true
                
               
                v-model="r11"
               
              />
              <label class="form-check-label" for="flexRadioDefault1">
                si
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r11"
                id="flexRadioDefault2"
                value = false
               
                 v-model="r11"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                no
              </label>
            </div>
          </div>
        </div>

        <div class="card border-dark mb-3">
          <div class="card-header">
            <i class="fab fa-quora fa-2x">:12&nbsp;</i>Dolores musculares
            generalizados inusuales o sin razón obvia (no relacionado con el
            esfuerzo físico)
          </div>
          <div class="card-body text-dark">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r12"
                id="flexRadioDefault1"
                value= true
                
               
                v-model="r12"
               
              />
              <label class="form-check-label" for="flexRadioDefault1">
                si
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r12"
                id="flexRadioDefault2"
                value = false
               
                 v-model="r12"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                no
              </label>
            </div>
          </div>
        </div>

        <div class="card border-dark mb-3">
          <div class="card-header">
            <i class="fab fa-quora fa-2x">:13&nbsp;</i>Dolor de cabeza
            inhabitual
          </div>
          <div class="card-body text-dark">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r13"
                id="flexRadioDefault1"
                value= true
                
               
                v-model="r13"
               
              />
              <label class="form-check-label" for="flexRadioDefault1">
                si
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r13"
                id="flexRadioDefault2"
                value = false
               
                 v-model="r13"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                no
              </label>
            </div>
          </div>
        </div>

        <div class="card border-dark mb-3">
          <div class="card-header">
            <i class="fab fa-quora fa-2x">:14&nbsp;</i>Describa si tiene otros
            síntomas:
          </div>
          <div class="card-body text-dark">
            <input
              type="text"
              class="form-control"
              name="r14"
              v-model="r14"
              aria-describedby="helpId"
              placeholder="Escribe aqui.."
            />
            <select class="form-select" aria-label="Default select example" name="modalidad" v-model="modalidad">
              <option selected>MODALIDAD DE LA ENCUESTA</option>
              <option value="obligatoria">obligatoria</option>
              <option value="voluntaria">voluntaria</option>
              <option value="aleatoria">aleatoria</option>
            </select>
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <h3>Data retrieved from server:</h3>
      <div class="alert alert-success" role="alert" v-if="success">
        <strong>{{success}}</strong>
      </div>
      <pre>{{ response }}</pre>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      modalidad:'',
      id_usuario:1,
      r1:'',
      r2:'',
      r3:'',
      r4:'',
      r5:'',
      r6:'',
      r7:'',
      r8:'',
      r9:'',
      r10:'',
      r11:'',
      r12:'',
      r13:'',
      r14:'',
      success: '',
      response: '',
      success: ''
    };
  },
  methods: {
    submitForm(){
      axios.post('//localhost:3000/quizs', {
    modalidad:this.modalidad,
    id_usuario:this.id_usuario,
      r1:this.r1,
      r2:this.r2,
      r3:this.r3,
      r4:this.r4,
      r5:this.r5,
      r6:this.r6,
      r7:this.r7,
      r8:this.r8,
      r9:this.r9,
      r10:this.r10,
      r11:this.r11,
      r12:this.r12,
      r13:this.r13,
      r14:this.r14
  })
  .then(response => {
        console.log(response);
        this.response = response.data
        this.success = 'Data saved successfully';
        this.response = JSON.stringify(response, null, 2)
      })
  .catch(error => {
        console.log(error);
      });
    }
  }
};
</script>