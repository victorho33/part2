<template>
    <div class="product">
        <h1>Product</h1>

        <table style="width: 100%;border: 1px solid black;">
        <tbody style="border: 1px solid black;">
        <tr>
        <td style="width: 19px;"><input type="checkbox" /></td>
        <td style="width: 10%;">Image</td>
        <td style="width: 50%;">Product Name</td>
        <td style="width: 10%;">Unit Price</td>
        <td style="width: 10%;">Unit</td>
        <td style="width: 10%;">Unit Ordered</td>
        </tr>
        <tr v-for="item in items" :key="item.id">
        <td style="width: 19px;"><input type="checkbox" value="{{ item.ProductId }}" /></td>
        <!--<td style="width: 10%;">&nbsp;<img src="../assets/icon/{{ item.ImgName }}" alt="logo" width="50" height="50" /></td>-->
        <td style="width: 10%;"><img v-bind:src="'/src/assets/icon/' + item.ImgName" :style="{ height: '50px', width : '50px' }" ></td>
        <td style="width: 50%;">{{ item.ProductName }}</td>
        <td style="width: 10%;">{{ item.PricePerUnit }}</td>
        <td style="width: 10%;">{{ item.BasicUnit }}</td>
        <td style="width: 10%;"><input style="width:40px;" id="orderqty" name="orderqty" type="text" value="1" maxLength = "3"/></td>
        </tr>

        </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return {
      items: []
    }
  },
  mounted() {
    this.populateProduct()
  },
  methods: {
     
    async populateProduct(){

      const data = {        
      }

      const headeroption = { 
        headers: {
          'Content-Type': 'application/json'
        }
      }

  //  const response = await axios.get('https://localhost:8082/api/products', data,  headeroption )
      const response = await axios.get('https://foodyproductapp.us-e2.cloudhub.io/api/products', data,  headeroption )

      console.log(response.status)
      //console.log(response)      
      if (response.status == 200) {
        //alert(response.data.msg);
        this.items = response.data
        //this.$router.push({ path: '/product' })
      }

    }
  },
   selectAll: function() {
            this.ProductIds = [];

            if (!this.allSelected) {
                for (user in this.users) {
                    this.userIds.push(this.users[user].id);
                }
            }
   }
}
</script>