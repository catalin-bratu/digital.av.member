<template>
  <q-page style="height: calc(100vh - 50px)">
    <div class="tw-grid md:tw-grid-cols-3 md:tw-h-full">
      <div class="md:tw-col-span-2">
        <q-img class="tw-h-64 md:tw-size-full" src="https://placehold.co/600x400" />
      </div>
      <div class="tw-flex tw-self-center tw-justify-center tw-p-16">
        <div class="tw-flex tw-flex-col tw-gap-4">
          <div class="text-h4">Mein.Alpenverein</div>
          <div class="text-subtitle1">Sektion Ravensburg</div>
          <div class="text-body1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed:</div>
          <div class="text-body1">Ich habe bereits einen Zugang zu mein.alpenverein:</div>
          <q-btn label="Login" color="primary" no-caps disabled />
          <div class="text-body1">
            Ich bin bereits Mitglied, habe aber noch keinen Zugang zum Mitgliederportal mein.alpenverein:
          </div>
          <q-btn label="Jetzt Zugang freischalten" no-caps :to="{ name: 'enrollment' }" />
          <div class="text-body1">Ich bin noch kein Mitglied des Deutschen Alpenvereins:</div>
          <q-btn label="Jetzt Mitglied werden" no-caps href="https://www.alpenverein.de/thema/sektionensuche" />
        </div>
      </div>
    </div>
  </q-page>
</template>
