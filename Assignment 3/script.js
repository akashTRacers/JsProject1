
result=[
{"price": 10, "newvalue": 8, "sum": 80, "total": 80},
{"price": 20, "newvalue": 5, "sum": 180, "total": 100},
{"price": 10, "newvalue": 5, "sum": 230, "total": 50},
]
	function calculateAmount()
	{
		var total1,price1,quantity1,sum1=0,size,i=1,j=0;
		 price1=document.getElementById("price").value;
	 	console.log(price1);
	 	quantity1=document.getElementById("quantity").value;
	 	console.log(quantity1);
		
		total1= price1*quantity1;
		sum1=total1;
		var newObj={"price": price1, "newvalue": quantity1, "sum": sum1, "total": total1};
		result.unshift(newObj);
		console.log(total1);
		size=result.length;
		console.log("Result length"+size);
		//ocument.getElementById("demo").innerHTML=result[size].price;
		while(i<size)
		{
			result[i].sum=result[i-1].sum+result[i].total;
			console.log(result[i].sum)
			i++;
		}
		while(j<size)
		{
			document.getElementById("demo").innerHTML+= "price "+result[j].price+" newvalue "+result[j].newvalue+" sum "+result[j].sum+" total "+result[j].total +"<br>";
			j++;
		}


	}

