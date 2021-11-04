<template>
  <div class="flex items-center min-h-screen bg-black">
    <div class="container mx-auto">
      <div class="max-w-md mx-auto my-10 p-5 rounded-md shadow-sm">
        <div class="text-center">
          <h1
            class="my-3 text-3xl font-semibold text-gray-700"
          >
            お問い合わせ
          </h1>
        </div>
        <div v-if="isSubmited" class="m-7 text-center">
          <h1>お問い合わせいただきありがとうございます。</h1>
          <h2>ご返信までしばらくお待ちください。</h2>
          <nuxt-link
            to="/"
            type="button"
            class="py-4 px-8 mt-8 text-lg text-gray-50 bg-green-500 hover:bg-green-600 focus:ring-green-600 focus:ring-offset-green-600 text-white transition ease-in duration-200 text-center font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full"
          >
            TOPへ戻る
          </nuxt-link>
        </div>
        <div v-if="!isSubmited" class="m-7">
          <form>
            <div class="mb-6">
              <label
                for="name"
                class="block mb-2 text-sm text-gray-600"
              >
                お名前
                <span class="text-xs text-red-500">(必須)</span>
              </label>
              <input
                id="name"
                v-model="name"
                type="text"
                name="name"
                placeholder="お名前太郎"
                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
            </div>
            <div class="mb-6">
              <label
                for="email"
                class="block mb-2 text-sm text-gray-600"
              >
                メールアドレス
                <span class="text-xs text-red-500">(必須)</span>
              </label>
              <input
                id="email"
                v-model="email"
                type="email"
                name="email"
                placeholder="your@example.com"
                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
            </div>
            <div class="mb-6">
              <label
                for="phone"
                class="text-sm text-gray-600"
              >
                電話番号
              </label>
              <input
                id="phone"
                v-model="phone"
                type="text"
                name="phone"
                placeholder="0312345678"
                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
            </div>
            <div class="mb-6">
              <label
                for="message"
                class="block mb-2 text-sm text-gray-600"
              >
                内容
                <span class="text-xs text-red-500">(必須)</span>
              </label>
              <textarea
                id="message"
                v-model="message"
                rows="5"
                name="message"
                placeholder="お問い合わせ内容です"
                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              >
              </textarea>
            </div>
            <div class="mb-6">
              <button
                class="w-full px-3 py-4 font-bold text-white bg-green-500 rounded-md focus:bg-green-600 focus:outline-none"
                @click.prevent="onSubmit"
              >
                送信する
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext, ref } from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {
    const { $axios } = useContext()
    const name = ref('')
    const email = ref('')
    const phone = ref('')
    const message = ref('')
    const isSubmited = ref(false)

    const onSubmit = async () => {
      return await $axios
        .post('/inquiry', {
          inquiry: {
            name,
            email,
            phone,
            message,
          },
        })
        .then(() => {
	  isSubmited.value = true
        })
        .catch(() => {})
    }

    return {
      name,
      email,
      phone,
      message,
      isSubmited,
      onSubmit,
    }
  },
})
</script>