<template>
  <q-page padding>
    <q-btn label="Abbrechen" icon="mdi-chevron-left" flat no-caps dense :to="{ name: 'home' }" />
    <q-separator spaced color="transparent" />
    <div class="tw-grid md:tw-grid-cols-2 tw-gap-4">
      <q-card class="tw-flex tw-flex-col tw-justify-between tw-p-4" disabled>
        <q-card-section>
          <div class="text-h6">Jetzt Mitglied werden</div>
          <q-separator spaced color="transparent" />
          <div class="text-body2">
            Sie sind noch kein Mitglied einer Sektion des Deutschen Alpenvereins (DAV) und möchten eine
            Neumitgliedschaft für sich oder Ihre Familie abschließen.
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn label="Jetzt registrieren" color="primary" no-caps />
        </q-card-actions>
      </q-card>

      <q-card class="tw-flex tw-flex-col tw-justify-between tw-p-4">
        <q-card-section>
          <div class="text-h6">Zugang zu mein.alpenverein freischalten</div>
          <q-separator spaced color="transparent" />
          <div class="text-body2">
            Sie sind bereits Mitglied einer Sektion des Deutschen Alpenvereins (DAV) und möchten den Online-Zugang zu
            mein.alpenverein jetzt kostenlos freischalten, um Zugriff auf die Online Services der Sektion zu erhalten.
          </div>
          <q-separator spaced color="transparent" />
          <div class="text-body2">
            Nach der Freischaltung des Zugangs können Sie bequem unter Nutzung der bereits vorhandenen Daten weitere
            Mitgliedschaften in anderen Sektionen abschließen.
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn label="Zugang freischalten" color="primary" no-caps :to="{ name: 'activation' }" />
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>
<script setup></script>
