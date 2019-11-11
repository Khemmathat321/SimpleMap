<template>
  <div>
    <div class="jumbotron">
      <p class="lead">X, 5, 9, 15, 23, Y, Z - finding X, Y, Z value?</p>
      <ul class="list-group">
        <li class="list-group-item" :key="result" v-for="result in results">
          {{ result.key }} is equal {{ result.value }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'scg',
  data () {
    return {
      numbers: ['X', 5, 9, 15, 23, 'Y', 'Z'],
      results: []
    }
  },

  mounted () {
    this.findXYZ()
  },

  methods: {
    findXYZ: function () {
      for (var index = 0; index < this.numbers.length; index++) {
        let result = {}
        let num = this.numbers[index]

        if (index === 0) {
          result.key = num
          result.value = this.numbers[index + 1] - (2 * (index + 1))
        } else {
          result.key = num
          result.value = this.results[index - 1].value + (2 * index)
        }

        this.results.push(result)
      }
    }
  }
}
</script>
