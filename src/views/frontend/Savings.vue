<template>
    <section class="bg-white">
      <div class="container py-40 mx-auto">
        <div class="flex flex-wrap mx-5">
          <div
            class="w-full px-4 lg:w-5/12 pt-3 pb-3 bg-amber-900 grid grid-rows-2 rounded-md hover:drop-shadow-xl"
          >
            <h2
              class="grid grid-rows-1 mt-3 mb-2 text-2xl font-semibold leading-tight text-white capitalize border-t-4"
            >
              <br />
              Total Savings:
              <span>
                <font-awesome-icon :icon="['fas', 'sack-dollar']" style="color: #ffffff" /> THB
                <span v-text="formatAmt(sumAmt)"></span>
              </span>
            </h2>
            <h2
              class="grid grid-rows-1 mt-5 mb-2 text-2xl font-semibold leading-tight text-white capitalize border-t-4"
            >
              <br />
              Available Balance:
              <span>
                <font-awesome-icon :icon="['fas', 'wallet']" style="color: #ffffff" /> THB
              </span>
            </h2>
            <img src="" class="w-full" />
          </div>
          <div class="px-4 lg:w-7/12 lg:ml-auto">
            <label class="block">
              <button
                @click="addIncome(inputDate, inputDesc, inputAmt, inputCtgr)"
                class="text-xl rounded-full bg-amber-600 px-3 py-1 mb-1 hover:bg-amber-700 text-white"
                type="submit"
                value="submit"
              >
                <font-awesome-icon :icon="['fas', 'circle-plus']" style="color: #ffffff" /> SUBMIT
              </button>
              <span class="text-white">{{ err_inputAmt }}</span>
            </label>
  
            <form class="grid grid-cols-4 gap-4 text-black text-center">
              <VueDatePicker
                v-model="inputDate"
                :start-date="startDate"
                focus-start-date
                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="Select Date"
              />
              <input
                v-model="inputDesc"
                type="text"
                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="Description"
              />
              <input
                v-model="inputAmt"
                type="number"
                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="Amount"
              />
              <select
                v-model="inputCtgr"
                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              >
                <option value="" disabled selected>--Select---</option>
                <option>Personal purpose</option>
                <option>Retire</option>
                <option>Emergency fund</option>
                <option>Others</option>
              </select>
            </form>
  
            <div class="grid grid-cols-1 text-center bg-amber-600 rounded-3xl my-3">
              <h2 class="my-1 text-4xl font-semibold leading-tight text-white capitalize">
                Latest Savings tracker
              </h2>
              <table class="border-separate w-100 bg-amber-800 text-white">
                <thead>
                  <tr>
                    <th class="border border-slate-600">No.</th>
                    <th class="border border-slate-600">Date</th>
                    <th class="border border-slate-600">Description</th>
                    <th class="border border-slate-600">Amount</th>
                    <th class="border border-slate-600">Category</th>
                  </tr>
                </thead>
                <tbody class="bg-green-100">
                  <tr v-for="(v_row, index) in tableRows" :key="index">
                    <td>{{ v_row['v_index'] }}</td>
                    <td>{{ v_row['v_date'] }}</td>
                    <td>{{ v_row['v_desc'] }}</td>
                    <td>{{ formatAmt(v_row['v_amnt']) }}</td>
                    <td>{{ v_row['v_ctgr'] }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  function convertDate(inputFormat) {
    function pad(s) {
      return s < 10 ? '0' + s : s
    }
    var d = new Date(inputFormat)
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/')
  }
  
  export default {
    name: 'Income',
    data() {
      return {
        inputDesc: '',
        inputAmt: '',
        inputCtgr: '',
        err_inputAmt: '',
        sumAmt: 0,
        tableRows: [],
  
        inputDate: new Date(),
        startDate: new Date(2020, 1)
      }
    },
  
    methods: {
      addIncome(inputDate, inputDesc, inputAmt, inputCtgr) {
        let index_incomeID = this.tableRows.length + 1
        if (inputAmt == '') {
          this.err_inputAmt = ' *please fill in the blank'
        } else {
          this.tableRows.push({
            v_index: index_incomeID,
            v_date: convertDate(inputDate),
            v_desc: inputDesc,
            v_amnt: inputAmt,
            v_ctgr: inputCtgr,
          })
          this.sumAmt += parseInt(inputAmt)
  
          this.err_inputAmt = ''
        }
      },
      formatAmt(get_number) {
        return get_number.toLocaleString()
      }
    }
  }
  </script>
  
  <style lang="css" scoped></style>
  