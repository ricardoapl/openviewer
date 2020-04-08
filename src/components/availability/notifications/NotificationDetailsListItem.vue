<template>
  <tr>
    <td>{{ name }}</td>
    <td>{{ content.timestamp }}</td>
    <td>{{ content.message }}</td>
  </tr>
</template>

<script>
export default {
  name: 'NotificationDetailsListItem',
  props: {
    name: String,
    content: Object
  },
  mounted () {
    console.log('NotificationDetailsListItem created and mounted')
  }
}
</script>
