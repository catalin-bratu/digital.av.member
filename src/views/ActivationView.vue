<script setup>
import { reactive, ref } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();

const step = ref(1);

const formState = reactive({
  sectionNumber: '217',
  contactNumber: null,
  firstName: null,
  lastName: null,
  dateOfBirth: null,
  iban: null,
  password: null,
  acceptDataPrivacy: false,
  acceptGeneralTerms: false,
  email: null
});

const onSubmit = () => {
  if (step.value === 2 && !(formState.acceptDataPrivacy && formState.acceptGeneralTerms)) {
    $q.notify({
      type: 'negative',
      message: 'Sie müssen die Datenschutz und die AGB akzeptieren.'
    });
    return;
  }

  step.value++;
};

const onValidationError = (el) => {
  el.$el.scrollIntoView();
};
</script>

<template>
  <q-page padding>
    <template v-if="step !== 4">
      <q-btn label="Abbrechen" icon="mdi-chevron-left" flat no-caps dense :to="{ name: 'enrollment' }" />
      <q-separator spaced color="transparent" />
      <div class="text-h5">Zugang freischalten</div>
      <q-separator spaced color="black" />
    </template>

    <q-form v-if="step === 1" class="tw-grid md:tw-grid-cols-2 tw-gap-4" @submit="onSubmit">
      <div class="text-h6">Sektionswahl</div>
      <div>
        <div class="text-body1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </div>
        <q-separator spaced color="transparent" />
        <q-input
          v-model="formState.sectionNumber"
          label="Drei ersten Stellen Ihrer Mitgliedsnummer*"
          stack-label
          disable
        />
        <q-separator spaced color="transparent" />

        <q-list>
          <q-item-label class="text-body1 text-bold">Sektion Ravensburg</q-item-label>
          <q-item class="!tw-px-0 text-body2">
            <q-item-section class="!tw-justify-normal">
              <q-item-label>Adresse</q-item-label>
            </q-item-section>
            <q-item-section>
              <q-item-label>
                Gebäude A
                <br />
                Testgasse 43
                <br />
                88212 Ravensburg
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-item class="!tw-px-0 text-body2">
            <q-item-section>
              <q-item-label>Telefon</q-item-label>
            </q-item-section>
            <q-item-section>
              <q-item-label>+49 731 119231412</q-item-label>
            </q-item-section>
          </q-item>
          <q-item class="!tw-px-0 text-body2">
            <q-item-section>
              <q-item-label>E-Mail</q-item-label>
            </q-item-section>
            <q-item-section>
              <q-item-label>info@sektion-ravensburg.de</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
      <div class="md:tw-col-span-2 text-right">
        <q-btn label="Weiter" type="submit" color="primary" no-caps />
      </div>
    </q-form>

    <q-form
      v-if="step === 2"
      class="tw-grid md:tw-grid-cols-2 tw-gap-4"
      @validation-error="onValidationError"
      @submit="onSubmit"
    >
      <div class="text-h6">Identifikationsdaten</div>
      <div>
        <div class="text-body1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </div>
        <q-separator spaced color="transparent" />
        <q-input
          v-model="formState.contactNumber"
          label="Mitgliedsnummer*"
          inputmode="numeric"
          mask="### / ## / ######"
          unmasked-value
          stack-label
          :rules="[
            (val) => !!val || 'Feld ist erforderlich.',
            (val) => val.startsWith('217') || 'Es sollte mit 217 beginnen.',
            (val) => val.length === 11 || 'Hinweis: ### / ## / ######'
          ]"
        />
        <q-separator spaced color="transparent" />
        <q-input
          v-model="formState.firstName"
          label="Vorname*"
          stack-label
          :rules="[(val) => !!val || 'Feld ist erforderlich.']"
        />
        <q-separator spaced color="transparent" />
        <q-input
          v-model="formState.lastName"
          label="Nachname*"
          stack-label
          :rules="[(val) => !!val || 'Feld ist erforderlich.']"
        />
        <q-separator spaced color="transparent" />
        <q-input
          v-model="formState.dateOfBirth"
          label="Geburtsdatum*"
          stack-label
          mask="date"
          :rules="[
            (val) => !!val || 'Feld ist erforderlich.',
            (val, rules) => rules.date(val) || 'Bitte geben Sie ein gültiges Datum.'
          ]"
        >
          <template #append>
            <q-icon name="mdi-calendar" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-date v-model="formState.dateOfBirth">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <q-separator spaced color="transparent" />
        <q-input
          v-model="formState.iban"
          label="Letzte 4 Stellen der hinterlegten IBAN*"
          inputmode="numeric"
          input-style="text-security: disc; -webkit-text-security: disc"
          mask="####"
          stack-label
          :rules="[(val) => !!val || 'Feld ist erforderlich.']"
        />
      </div>
      <div class="text-h6">Passwort</div>
      <div>
        <q-input
          v-model="formState.password"
          label="Passwort*"
          inputmode="numeric"
          input-style="text-security: disc; -webkit-text-security: disc"
          stack-label
          :rules="[(val) => !!val || 'Feld ist erforderlich.']"
        />
        <q-separator spaced color="transparent" />
        <q-checkbox
          v-model="formState.acceptDataPrivacy"
          label="Datenschutz: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          dense
          :rules="[(val) => !!val || 'Feld ist erforderlich.']"
        />
        <q-separator spaced color="transparent" />
        <q-checkbox
          v-model="formState.acceptGeneralTerms"
          label="AGB: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          dense
          :rules="[(val) => !!val || 'Feld ist erforderlich.']"
        />
      </div>
      <div class="md:tw-col-span-2 text-right">
        <q-btn label="Absenden" type="submit" color="primary" no-caps />
      </div>
    </q-form>

    <q-form v-if="step === 3" class="tw-grid md:tw-grid-cols-2 tw-gap-4" @submit="onSubmit">
      <div class="text-h6">E-Mail Adresse</div>
      <div>
        <div class="text-body1">
          Bitte bestätigen Sie den Online-Zugang per E-Mail, wenn Sie bereits Mitglied im DAV sind. Sie werden dann über
          das angegebene E-Mail-Konto Ihren Online-Zugang erhalten.
        </div>
        <q-separator spaced color="transparent" />
        <q-input
          v-model="formState.email"
          label="E-Mail-Adresse*"
          type="email"
          stack-label
          :rules="[
            (val) => !!val || 'Feld ist erforderlich.',
            (val, rules) => rules.email(val) || 'Bitte geben Sie eine gültige E-Mail Adresse.'
          ]"
        />
      </div>
      <div class="md:tw-col-span-2 text-right">
        <q-btn label="Absenden" type="submit" color="primary" no-caps />
      </div>
    </q-form>

    <div v-if="step === 4" class="tw-flex tw-flex-col md:tw-max-w-prose md:tw-m-auto">
      <div class="text-center">
        <q-icon name="mdi-email-outline" size="8rem" />
      </div>
      <div>
        <div class="text-h5">Zugang erfolgreich beantragt!</div>
        <q-separator spaced color="transparent" />
        <div class="text-body1 text-bold">Nächste Schritte</div>
        <q-separator spaced color="transparent" />
        <div class="text-body1">
          1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </div>
        <q-separator spaced color="transparent" />
        <div class="text-body1">2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
        <q-separator spaced color="transparent" />
        <div class="text-body1">3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
        <q-separator spaced color="transparent" />
        <div class="md:tw-text-right">
          <q-btn class="!tw-w-full" label="Zum Login" type="submit" color="primary" no-caps :to="{ name: 'home' }" />
        </div>
      </div>
    </div>
  </q-page>
</template>
