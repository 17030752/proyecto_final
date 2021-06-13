<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-center row">
      <div class="col-md-10 col-lg-10">
        <div class="border">
          <div class="question bg-white p-3 border-bottom">
            <div
              class="
                d-flex
                flex-row
                justify-content-between
                align-items-center
                mcq
              "
            >
              <h1>{{ $route.params.name }}</h1>
              <h4>MCQ Quiz</h4>
              <span>(5 of 20)</span>
            </div>
          </div>
          <div class="question bg-white p-3 border-bottom">
            <div class="d-flex flex-row align-items-center question-title">
              <h3 class="text-danger">Pregunta:1</h3>
              <h5 class="mt-1 ml-2">
                ¿Siente fiebre, escalofríos como los de una gripe, o una fiebre
                con una temperatura tomada por la boca de 38,1°C (100,6°F) o
                más?
              </h5>
            </div>
            <div class="ans ml-2">
              <label class="radio">
                <input type="radio" name="option_1" value="yes" />
                <span>Si</span>
              </label>
            </div>
            <div class="ans ml-2">
              <label class="radio">
                <input type="radio" name="option_2" value="no" />
                <span>No</span>
              </label>
            </div>
          </div>
          <div class="question bg-white p-3 border-bottom">
            <div class="d-flex flex-row align-items-center question-title">
              <h3 class="text-danger">Pregunta:2</h3>
              <h5 class="mt-1 ml-2">
                ¿Ha tenido una pérdida repentina del olfato sin congestión nasal
                (nariz tapada), con o sin pérdida del gusto?
              </h5>
            </div>
            <div class="ans ml-2">
              <label class="radio">
                <input type="radio" name="option_1" value="yes" />
                <span>Si</span>
              </label>
            </div>
            <div class="ans ml-2">
              <label class="radio">
                <input type="radio" name="option_2" value="no" />
                <span>No</span>
              </label>
            </div>
          </div>
          <div class="question bg-white p-3 border-bottom">
            <div class="d-flex flex-row align-items-center question-title">
              <h3 class="text-danger">Pregunta:3</h3>
              <h5 class="mt-1 ml-2">
                ¿Ha desarrollado una tos o su tos crónica ha empeorado
                recientemente?
              </h5>
            </div>
            <div class="ans ml-2">
              <label class="radio">
                <input type="radio" name="option_1" value="yes" />
                <span>Si</span>
              </label>
            </div>
            <div class="ans ml-2">
              <label class="radio">
                <input type="radio" name="option_2" value="no" />
                <span>No</span>
              </label>
            </div>
          </div>
          <div class="question bg-white p-3 border-bottom">
            <div class="d-flex flex-row align-items-center question-title">
              <h3 class="text-danger">Pregunta:4</h3>
              <h5 class="mt-1 ml-2">
                ¿Tiene problemas al respirar o le falta el aliento?
              </h5>
            </div>
           <div class="ans ml-2">
              <label class="radio">
                <input type="radio" name="option_1" value="yes" />
                <span>Si</span>
              </label>
            </div>
            <div class="ans ml-2">
              <label class="radio">
                <input type="radio" name="option_2" value="no" />
                <span>No</span>
              </label>
            </div>
          </div>
          <div class="question bg-white p-3 border-bottom">
            <div class="d-flex flex-row align-items-center question-title">
              <h3 class="text-danger">Pregunta:5</h3>
              <h5 class="mt-1 ml-2">¿Tiene dolor de garganta?</h5>
            </div>
            <div class="ans ml-2">
              <label class="radio">
                <input type="radio" name="option_1" value="yes" />
                <span>Si</span>
              </label>
            </div>
            <div class="ans ml-2">
              <label class="radio">
                <input type="radio" name="option_2" value="no" />
                <span>No</span>
              </label>
            </div>
          </div>
          <div class="question bg-white p-3 border-bottom">
            <div class="d-flex flex-row align-items-center question-title">
              <h3 class="text-danger">Pregunta:6</h3>
              <h5 class="mt-1 ml-2">
                ¿Tiene secreción o congestión nasal de causa desconocida?
              </h5>
            </div>
           <div class="ans ml-2">
              <label class="radio">
                <input type="radio" name="option_1" value="yes" />
                <span>Si</span>
              </label>
            </div>
            <div class="ans ml-2">
              <label class="radio">
                <input type="radio" name="option_2" value="no" />
                <span>No</span>
              </label>
            </div>
          </div>
          <div class="question bg-white p-3 border-bottom">
            <div class="d-flex flex-row align-items-center question-title">
              <h3 class="text-danger">Pregunta:7</h3>
              <h5 class="mt-1 ml-2">Dolor de estómago</h5>
            </div>
           <div class="ans ml-2">
              <label class="radio">
                <input type="radio" name="option_1" value="yes" />
                <span>Si</span>
              </label>
            </div>
            <div class="ans ml-2">
              <label class="radio">
                <input type="radio" name="option_2" value="no" />
                <span>No</span>
              </label>
            </div>
          </div>
          <div class="question bg-white p-3 border-bottom">
            <div class="d-flex flex-row align-items-center question-title">
              <h3 class="text-danger">Pregunta:8</h3>
              <h5 class="mt-1 ml-2">Náuseas o vómitos</h5>
            </div>
           <div class="ans ml-2">
              <label class="radio">
                <input type="radio" name="option_1" value="yes" />
                <span>Si</span>
              </label>
            </div>
            <div class="ans ml-2">
              <label class="radio">
                <input type="radio" name="option_2" value="no" />
                <span>No</span>
              </label>
            </div>
          </div>
          <div class="question bg-white p-3 border-bottom">
            <div class="d-flex flex-row align-items-center question-title">
              <h3 class="text-danger">Pregunta:9</h3>
              <h5 class="mt-1 ml-2">Diarrea</h5>
            </div>
            <div class="ans ml-2">
              <label class="radio">
                <input type="radio" name="option_1" value="yes" />
                <span>Si</span>
              </label>
            </div>
            <div class="ans ml-2">
              <label class="radio">
                <input type="radio" name="option_2" value="no" />
                <span>No</span>
              </label>
            </div>
          </div>
          <div class="question bg-white p-3 border-bottom">
            <div class="d-flex flex-row align-items-center question-title">
              <h3 class="text-danger">Pregunta:10</h3>
              <h5 class="mt-1 ml-2">
                Fatiga inusualmente intensa sin razón obvia
              </h5>
            </div>
            <div class="ans ml-2">
              <label class="radio">
                <input type="radio" name="option_1" value="yes" />
                <span>Si</span>
              </label>
            </div>
            <div class="ans ml-2">
              <label class="radio">
                <input type="radio" name="option_2" value="no" />
                <span>No</span>
              </label>
            </div>
          </div>
          <div class="question bg-white p-3 border-bottom">
            <div class="d-flex flex-row align-items-center question-title">
              <h3 class="text-danger">Pregunta:11</h3>
              <h5 class="mt-1 ml-2">Pérdida significativa de apetito</h5>
            </div>
            <div class="ans ml-2">
              <label class="radio">
                <input type="radio" name="option_1" value="yes" />
                <span>Si</span>
              </label>
            </div>
            <div class="ans ml-2">
              <label class="radio">
                <input type="radio" name="option_2" value="no" />
                <span>No</span>
              </label>
            </div>
          </div>
          <div class="question bg-white p-3 border-bottom">
            <div class="d-flex flex-row align-items-center question-title">
              <h3 class="text-danger">Pregunta:12</h3>
              <h5 class="mt-1 ml-2">
                Dolores musculares generalizados inusuales o sin razón obvia (no
                relacionado con el esfuerzo físico)
              </h5>
            </div>
            <div class="ans ml-2">
              <label class="radio">
                <input type="radio" name="option_1" value="yes" />
                <span>Si</span>
              </label>
            </div>
            <div class="ans ml-2">
              <label class="radio">
                <input type="radio" name="option_2" value="no" />
                <span>No</span>
              </label>
            </div>
          </div>
          <div class="question bg-white p-3 border-bottom">
            <div class="d-flex flex-row align-items-center question-title">
              <h3 class="text-danger">Pregunta:13</h3>
              <h5 class="mt-1 ml-2">Dolor de cabeza inhabitual</h5>
            </div>
            <div class="ans ml-2">
              <label class="radio">
                <input type="radio" name="option_1" value="yes" />
                <span>Si</span>
              </label>
            </div>
            <div class="ans ml-2">
              <label class="radio">
                <input type="radio" name="option_2" value="no" />
                <span>No</span>
              </label>
            </div>
          </div>
          <div
            class="
              d-flex
              flex-row
              justify-content-between
              align-items-center
              p-3
              bg-white
            "
          >
            <button
              class="btn btn-primary d-flex align-items-center btn-danger"
              type="button"
            >
              <i class="fa fa-angle-left mt-1 mr-1"></i>&nbsp;previous</button
            ><button
              class="
                btn btn-primary
                border-success
                align-items-center
                btn-success
              "
              type="button"
            >
              Next<i class="fa fa-angle-right ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>