import requests
import json
import pandas as pd

url = 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2'
# define query

query = '''{
  pairs(first:10) {
     id
    token0 {
      id
    }
    reserve0
    reserveETH
    reserveUSD
  
  }
}'''


# make the request
r = requests.post(url, json={'query': query})
# load result into json
json_data = json.loads(r.text)
# convert json into a dataframe
df = pd.DataFrame(json_data['data']['pairs'])
# check result
print(df)
