import React from 'react';

const benefits = [
  {
    title: 'Detoxification',
    description: 'Helps remove toxins and purifies the body.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5fnRl97H3cDk5c7Q3dtXnjCcqTHAlUAUSzA&s' // Example image path
  },
  {
    title: 'Better Digestion',
    description: 'Enhances digestive health and gut balance.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROtdQzl5CVP3WtOCXPRfh6di1nvYbASdvWHw&s'
  },
  {
    title: 'Boosts Immunity',
    description: 'Strengthens natural defense mechanisms.',
    image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhURERMVFhUWGBgXGBcYGRcXFRcVFhcWGBYYFhUYHSggGRonHBUVIjIiJSkrLi4uFyAzODMsOygtLisBCgoKDg0OGhAQGy0mICU3LS0uLy0wNS0tLS0tMC0tNy0tLTAtLS0tLS0tLy8tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAI8BXwMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYCAwQHAf/EAEYQAAIBAgQDBQQHBQYEBwEAAAECAAMRBBIhMQUGQRMiUWFxBzKBkRQjJUJSocFTcrGy0hVic7PR8EOStOEkY4KDhMLxF//EABoBAQADAQEBAAAAAAAAAAAAAAACAwQBBQb/xAA3EQACAQMDAAcGBgEEAwAAAAAAAQIDBBESITEFE0FRcYGxFGGh0eHwIiQyNJHBMxUjgvFCUnL/2gAMAwEAAhEDEQA/APcYAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIBAcxc4YTBaVql337NBmqfEbL6sQJFySJRg2VDh3tXNWulIYXSpWVAc+q02IXMdLFrkkjQADc7yOssdLbk9OlhSIAgCAIBiXgGBqTuAcfGOIilReoCLgWA0vmPgDuetutpVVnojki3hELy5zNUrMKTpmNlF1AHiGdrkaXA2HXrM9KvJvSyMJ52LXNhYacZiRTRqjbKCdwPQXPidPjIzlpi2CA5c5lOIbs2TvWBLLYC3euxBNwPdFhfUzPSruT0tFcJ6iwYgtbubzSWGxD/vznQY1KqrbMwGY5Rc2ux2A8ToZxtLkGQM6D7AEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAKX7UOZamDw6rRNqlYlQ/4FUXYj+9qAPW/SQm8Ispxy9zxvgvCquNrGkjDOQzlnJ1ta5LWJJ1lEpKKyzQkXXgfssLuBiq65Oq0rktbdc7AZfkfhOQnGbwcnmKyj2GlTCgKosAAAPADQTWZDKAIAgGJgGphOg0uSJJEWcuKprUUqwv8Appa489ZyUFJYkQZo4DwqjRdioF9MosLrYWazbm97+UpjbKm9SEMEz9IS5XMMy2uL6i+1x0ktSzjJaZ3BHjO7MHBhODU6T56Yy+XT4ddevjIQpRi8o4opEfxbmYUK4p5cyhTmsGzhtMthaxXXeVVLjTLBGU8PBI8M4vTrgZWGayllvcrmBtf5GWU6sZokpJkNzrhK9QJ2Quq+Ba+Yg6kDQAADW99SOspuYyeMcEKib4OrlWjUTDhmJJIGRb3ULa4K6XBN9b+HSTt01Dc7DOCcosSAWFj4TQTM4AgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAVrn/AJb+nYUotu1pnPSO12A1UnwYaetj0kZLKJwlpZUfZ3y9SphcWtRmqFDTqIQB2VXMpdCNwQVtY+swVZP9Jsii4YTAqlZatMBbKUKKqqGuVIJIF7ixA6d4yMJtSRycU0yxz0zCIAgCAIBiVgGmok7k5g4cRTlkWVyRyPV9cw103NvDzk3sslZSOIYuo1VmOfM9iRlszAAZQ4C2Ph5aTwZttvJxyeT0LlxnalnqMGzEkaZbD8Pnax1m+3cnDLNK4JaXnSj8ycuVDUNRWZwbtrZnJBuEUW6aWnn1qUlLK3yVTp53LFy1w7sKIUm5NjqoVgLDutrqQb/OaaFPRHftJxWFg7q9ZVdAzhcxsqkgZj4Dxlkmk1lksm8GTBWud8XUSmnZhgMwYsNrgjKLg3vfpYi1/SZbmTSWCuo2lsdHKWKr1KZNbYEgXVgxNyS2Y6EWIAA2tO20pSW52DbW5PTSTEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBANWKxC00ao5sqi5PlJRi5NRXLIVJxhFylwisnnuh0p1d/BdvH3pufR1THKPL/ANYo5/TL4fM7Vqq/1iZSG72mxv19Z85WUlNqawz6SjKEoJweV3kRV5gp0cR3xV7oykAqUINiDlJ94eM9Sy6PqzgqkWsPsPMvOl6VGUqE4brG+3d35z5Fp4bxOlXXNScMOo2YeqnUSdSlOm8SQo3FOssweTslZcIAgGhsWoNr9bSp14J4yWKlLGTfLSs+EQDnrU51M40Q+Oo9RvNEGUTREYpEINQixBDMQSputiLka20lVejR0uU178rkgpPsJ1uY6RoGrSIY7BSba6bnw13mGV1FRyue41KSayjkfm9FoGq698aGmpv8b22kVdZjxuRdRJZZN8Kxwr0kqqCAwvY7jpNFOeuOSSeVk65YdKFzziKnajuuqropI7pbKe8hAJHvAE77Tz7htz9xTVbO/kdqpBBZgiX7hS2Yuxs+ew17p085O1zus7Eqee0tdVgBrNjx2lhhhKaKoWmoVRsALAddpyKSWEEbpICAIAgCAIAgCAIAgCAIAgHjnOdBH4rUSq4poTTDORfKOyTW09u1lKNsnFZe/qeHcxjK4alstt/I0UaHYYuknDsQ1YkrqilRe+qsNmW2pOwHpJuWuk3Wjgio9XUSoyz4HovNvNyYMrTVO0qsLhb2CrsCx13INgPCeXbWrrbt4R6dzdqjsllkXwjn4tVWji6BoliAG7wsW2zKwBAPjLqljiOqnLJRSv8AMtNSOCR5q5wXCMKKJ2lUgG17BQdrkAkk+A/0ldtaOqtTeEW3N4qL0pZZx8D557SsKGJomizEAHW2Y7BlYArfx85OtY6Y64PKKqN/qnoqRwbeN83vTxBwuGodq673J3tmIVQNbDrOUbRSp9ZOWEdrXso1Orpxyz5iuYqz4GtVOGem4PZ2JYHvCzONAwy3vt03nY28I1ox1Jrn6HJ3VSVCUtDT4+vkQ3IXGqwqdiUeotRxeoS7dnZT5Ea+omi9owcdWUsdneZbC4qKWjDafbvsSvtDxzAJQAIU99jY2NjZVvsdbn5Svo6nHLk+ez5nemKsklTS25b7Pcv7/go89U8IkuCVMRnyUGIvqeqgdSQQQJivoW2jXXWcfz4I39HzutfV27xnnu8X95OzjnAqiA1i/adXNrEeYA6fwmWw6SpTaoqOnu++/wBTX0h0XWpxddy1f+22H4+HoQuHxDU2zoxVh1UkH8uk9aUVJYayePGcoPVF4Z6hwnGuKSdqczZQSdAbnXYaT5GtcxVWSS2zsfcW9Cboxcn+LCydLY89BKXdPsReqHeyv8ebiFStR+iH6u/1g7qqMrA95iC1iDbu+E3WdSnUpz6zns8/kY7mFSE49Xx2/fvJ4cOJ3YD01mBWsu1m13C7ESAE3GU+wDFhAOHF0riWRZCSKxxFApNxdTow8VO81KKqRcWZJbMr2IoimGRR3VuwUddbDUa2sQZ83Vjio0+/BbhKOxwLimTJlGUVL3Q62y21BOtjfbynNOc+4r1NYx2nqHLXEu3pE9nkyMUsPdNrarN9vU1x4xg1xeUc9TmimtdqLCwBy5tbXt3ib2tY/PecdzFSwzmtZwS7UadYK5VXFrqbA6MNwelxLnGM1l7kuTHh2BWigppfKNrkk733MU4KCwglhYIrmri/YBFAuWYXuDYp94KR97aVV6ujCRGcsGXAuP0qtk9x2LBVNySFAJJNrDr8opV1LbtEZJk7NBMQBAEAQBAEAQBAEAQBAEA8d5yrU04rUaqmdAaZZL2zDsk0vPbtoydslF4e/qeJcyirhuW629Dh4hiKeIq0/wCz8M9Jx+FizFrjKRb3ba636+UshGVOL66WUVVJKpJdTHDLFztha2HxlHHMmdAKRY/dD091J+7e1wf9JmtJRqUnSzh7/E03cZU6qq4ytvgcXFse3FsTSWhSKhRlJNjYE3ZnI0AHT/vaWU4K1ptzZVVqO7qR0I7ubaVTCcQXGlC9MlWB6XC5CpPRtLj/ALGQtnGrQdLOH9sndKVG4VXGV9o5sTim4rjabUaRVUyBm3sqsWLMw0B1IAk4xVrRakyuU3d1k4LZY+/kbOdHwrYqp2iV6Ti3fCqUqEAd4oxU9LXU62nLRVVTWGmu7u9Reui6r1Jp9/Y/Lb4EnyZUxFbB4pXLuuQrSLXJLFGzKpOpHu/OU3apwrQa2faXWbqzozT3XYcPs74yKVQ4YoS1Vxre2XKpvmG/SXX1FzjrzwU9HXChLq8bv4F3x/eYjptPla0n1mV2H1NKK0bkK/AMPmLsvwvlTTrYTTDpK5UFTjLz5ZiqdF2kp9ZKPlwv4KVw2o+ExLsjiomq7k513GvQjTX1n0FS29rorrE4vn3pnhK+hZ1X1OJL4YJbG8zPUV0CKAwy+JAO++h/SUUOh6dOcZuTbW/cLjpurVhKCikmsd/j4/xt7yQ5R5fpYmg7VQb57KQbEAKL+R1PWXXdzOlUSj3Eej7KnXpNzXbsXFsB4HTznzsrXfZn1Cr7bo208Go31/h8pOFvFc7kJVpPg6AJoKj7AEAQBANNZZ1HGV7jGHuDNVKRmqRKs9J2YhgAirZXBOYH4azyrunWnUk2uMvjbH9nIY4+8nzD8JPZ1K6Dtythe9yCOg+Y2mFKUo5S2JqCSb5ZeuXcY70afaU8jEbAWFhtpPQozbSTRfFtrLIjF8rUxWVwxy5rkEnMBl3DG+ZswB1/SVyt0pc7EHBZyW1TNhYYLWBbLIqSbwCt80cBNdgyMbmw7xuigAglVsd76+Mz1qLk8ornDUbOT+DtRVnbMpYkZWC/dNgwK9LDQaRb03H8TEI4LJNRYIAgCAIAgCAIAgCAIAgCAUzGc59jjPouIwwRcwHa58wyt7j5Sg0Ol9dNd7TdG010tcJeWPqYZXemrolHzz9DfzPziuDrLQp0e1qMASA2SxY2RdFNyfD08ZG3tHVi5SeEduLvqpKMVllmpuTTDVQqnKCwvmVTbUZiBcDxtMjW+ImtPb8RjhKtIg9kUI65CpHxyzslJfqEXH/xM6lVL5WZbn7pIub7aTiT5R1tcM+K9NTkBVT+EWB18p3De5zMVsHamxysUJ8DYn5QlJboNxezM6TqRdSCOhFiNNDtONNcnU01sBTF72F/Gwv84yxhGmpgwTe51madvGTzkujWaWCD50wAOEYre6FWPmL2N/LW/wAJ6HR0YU6ywuTzOltVS3fu3POJ9CfKiAelchgfRFt1d7+ua38AJ4d//mfkfTdFL8svF+pYpiPSEAQBAEAQBAKZzpzymFvRoZalfrfVKf79t2/ug+tuu22s3U/FLZepkr3Sp/hju/Q6+GYt8RhadaqgR3W5AvbyIvqARY285XJKFRxi9kSTcoKT7SEqLaoR+IH5jUfrNS3iZmty0cpVAaGXqjMvwJzD+aYriCjPZYNdtLMPAm5SXlP54xysjUqVXLVQqW0NrG/dv49fhMVxUg/wlVVvGzODD82slJaKspqKB32uwPW1h6267SmNecY4SOdauO0tuA4qjLTLsi1HUd0HrsbfGbKdaLSy1lluSSl50116yoMzsFAtqTYXOg19TONpbsGYN9p0H2AIAgCAIAgCAIAgCAIAgFN9pnA1rYc4gWD0AT+9T+8p9Nx6Hxm2xrOE9PY/UxX1FShq7V6ED7NOFfSKz4ysc/ZkKtzcmplHeP7q2t6+U031XRFU49voZrKlrm6kuz1M/aHinrY2lgi+Skezv+HNUaxdh1sNvjFlGMKTqYy9/gcvZOdVUs7bfEjuYuGf2ViKL4aqxJBaxtm7pFw2WwKtfa3Qy2hU9qg1NFNel7LNOD+/qd3MrD+2KDHTvYc69O8JXQ/ayXiWXH7uL/8Akz49b+2qXk9D/wCsUf2j8xWx7ZHyI/juDetxSrSpGzu4UHawNJc1yOmW8tozULZSlwvmUV4Od1KMeW/6PS+XOF/RcOlAtmyZu8Blvmdm2ufxW+E8mvV62o545PZtqPU01DOcfMkpSXiAcXGgPo9bNt2b3/5TLaOesjjvRRc46mee5+h48Wn0eT5KMMo+Z5zJ3q0bKOIdPcd1vvlYr87GeZe3GHojz29p7PR1rqWuWcdm+M+/Y6aHGcQgsteqBe/vE6/GeZKTlyexGKisI7eG8YxVSrTTt6lmYA97pfX8ryE5aYtlkVlpHoH0l/xfwnn9dU7zX1UO4DFP4/whV6neOqh3H0Yx/H8hO+0T7znUwMvpzeXykvaZnOoiUf2mccqoKVOnWZC2bOqWUldLEsO8Oo3118J7HRKdVylOPGMHl9JPq9Kg+eSE5G5ObEsK1YWojUA/8TzP9z+PpN93d6PwQ59Pr6GO2ttf45cev09T1bEUgFsNhPKgenIpfGiUqK4J0zafdOnXr4n4Sm+lKGiUedzMlua+XeKVTUFKiUDOyv3s2Upre19juLeUwwqVW0s/yTpy7I/aPRaj5QWOwBPynoN4WTQeW8xcSTE56qKUAYBx1bYEjzsPynlylqnnHJmqSUlldhG4ipo92Qpb6sLa9+lgNpFL+SuT5zx2Fm5d4SmJdKjtlenZsi6XUne3hcSyhTU21kvjFSxJ8noE9MuIHm7C1qtILRFxe5AJzHUAAAaEam99rCZ7iMpL8JCabWxz8k4SoiM1Qta5AW5y3DEMSpF81138D8ZC1i0m2cpp43LNNZYIAgCAIAgCAIAgCAIAgHDxrB9vQq0MwU1EKX3tmFr2vrLKU9E1LuK6sdcHHvI/lDl36DTen2naZ3z3y5bd1Vta5/DLLmv10k8YK7ah1MWs5NfNfKdPG2YsUqKLBwLgrvlZeov56Xnbe6lR25RG4tY1t+GRHB/Z4qVVq4msa2UghbEAkbZiSSQPD/8AJfUv246YRwUU7BKWqcsnbzZyYMZUFZKnZvYK11zKwF7HcWOpkLa8dKOlrKJ3Nn10tSeGceA9n/ZV6VYYgnIyuQU1YqbnXNoD8fjJzv8AVBx08lcOj9M1LVwSScqWx5x3a/eLZMv/AJeT3r/HaVe1f7PVY8/PJarT/f67Pl5YLNMhtEAQCu83Y49m2HpZS7L3yzKqpTY2uWYgXJ0A9ZOGrUnHkrqqDg1Phnn1ThdYEKELlgSOztVBANjY077GXe014Pdvz+pn9ktpx2ivL5o56+HembOjId7MpU28bNJSvasljOPAjDo6hF5xnxNUyG478JwXEVdUouQdjbKD/wCprCAT/A+UcStVKlQIgU3Peu2x2A0/ORnHVFolCWl5LsmAHUk/IShWse1lrrvsRm2CXpcf785120HwRVaRguAHUmRVqu1knXfcb6eHUbCXRpQjwiuU5Pllb4zyXSxGLXFPqMoDIfdZl91m8dLC3Wwm2F1OFPq4/wAmSVtCdTXL+Cy0aQQZVGkzGg04raSiRkUrj1Hv5rttbLew394abyNxaSrLVF79xmcknuOXeHUxiDmp58ih85Y5s6sLd3y08pk9lnSlmayuzHBOlpcti+qbi81J5RoK/wAx8Cz0wMPSp3zXYaLcEa2MyV6GUtCISjlbFU4vwZcHlDU85qEagarbcZiP4TNUpyi8SZU4Rh2ZyXjhPCaVG9WmpDOq3zG5AsO75TdRoxh+JF6SW5sxXEuzR3bZRpobXOgvbpe2slOppTbGSJ4XzfTcDtgKZyZnbXIDp7t9SNd5TC5T2kQjUTW5ZlYEXGxmtFh9gCAIAgCAIAgCAIAgCAIB5Vx0fbtP/EofypPXpfs34M8mqvza8ia45z3Uw+MfDCgHVSoFic7FkVgALeLASilZKdJT1Y/7Lqt64VHDTn/o4sL7Sat2SphbvsioWDZ72yspBPy102lkuj47NS2K49IS3TjuSXKnO74nEfRq9IIzZspXN7ygkqytqDYH5Sq4s1Thri8llveupPRJYOOr7Qawq1aS4YOVZ1XKWJJRrXIAOlgTpLFYR0qTljgrfSE9Tio55NeG9o1VkKjDZqv3cmYrl+8Sou2n+7WnZdHxTzq2IrpGTX6cv3EvyxzicUlYPTValJDUFicrKAfHUa2+cpuLTq3HD2exfbXjqqWVutzLlnmx8VSxFRqaqaKBgASb3Vzrf9wfOcuLVUpRSfP0Ftdyqxk2sY+pr4PzhUrYfE1zSQGgoYAEkNcMdT02kqtnGFSEE+SFK+lOlObX6SN//oNYpmXDi4PebvFADbKCRsSb7mXf6fDOHL5lH+pz05UPkctWulTD18WylhVyh6ZY6VEqpoHAvls6kDpt0ldKg6Vyop+ZbWuI1rRza7Vlea7Riq2Xh1N6NJlDl0JDM3ZgVQ18395lA1l8aad03J7pfzsZZ1MWaUFhNvy37/eOXaBxSCnUoM4ppVanVLVArPcEIWGm/wAdJXe0qerU33be7vLej69XToUc8tN557jv5OxWGIrVDQVHorn1LOcoBvbP7pBHTxlNez6txUXnOxfbdIdbGbmsad/IneU+O1MWHZ6aoq2AIJN2OpGvgLfOQureNHCTy2TsrqdxltYSLDMhvEAQBAEAQBAOTFbSUSMircUoZmA8x/GbacsIyTjlnDxLGVcOS9DLckK+q3AJuND6Tz76vsoxl4952KlB5SJipzYAqWUs4t2iiw9cvj6TF7ZiK28TTqLQrXF/K/nNqeSZghDi5Xr1Hh1jCfINJxP1nZgi9r2uL28beErc3r0g5uOcONZMilhuSAQA2hsr3Gq3tOVqeuOERkslX4NyvUSuBUuLAOTlBptcgFCb6vYfrMsKEtaT8e/yK408Mvai2gnoFx9gCAIAgCAIAgCAIAgCAIB5Xx0fbtP/ABKH8qT16X7R+DPKq/ul5GWJH2//AO4n/TrC/ZeX9nJL855/0faQ+39v+If+nMP9n5f2cx+c8/6GAH28f8Sr/kPE/wBn5L1OR/e+b9DLkUfauI/+R/nLF3+2j5egtF+Zl/y9T77Oh9oV/wByr/nU4vf8EfL0YsV+Yl5+qNXIVEtiMWg3ajUA9S4AnbxpQg/eiNkm6k17n6kby/xWphVxGH7FmeqmUjUMhUOCSttQAxPTaXV6UarjPOy+Jnt60qSlDTu/gSHKw/8AA8Q/cX+V5Xcf56fj8iy2X5er4fM6eAD7KxXq/wDLStKbh/nKfgW26/JVfvsOfBr9k1j17YfmaH+kum/zcfB/2UxX5Kfiv6OvCcPd+Fl1ubKwygG5tiM5NvIAyqUkrzL+9i2EHKwaS7/UkPZ1xi6/RMh7od899NWGlrb97x6SPSFHfrM9yJdGV8rqcd7z5kFzbhzh8TV7M2Sst9NirMC6/wDMs1WklUpLVyvv0MV9B0a0tPEv75+KPQOVeH9hhqaEd4jM37zakfDQfCeTc1Osqtnt2dHqqMYvnl+LJaUGoQBAEAQBABgHLXEkjjIyvRAOZtAveJ8ANZY6ijFtlOnco3GKyO2ak31b1Bma+uY7+m08SbTqSa8SEmmljgjyct2ankyuoGpu4J1GvW1zfykfdkhxu1gufLnDqjVVxZrHJbLkJJOgsAfLaX28G2pdxpjF51ZLlfrPQLDy7j2MqNXdiKilhYBls+S7nKwA1A008De88qcnKTyZpt5L1yvVqPSz1HBB0VctigUZSCfvag6zbbuThlsvjkl7TQSPsAQBAEAQBAEAQBAEAQBAEA1PSJN87DyAX9VvBzBj2B/aN8k/pnMDB97A/tG+Sf0wMDsD+0b5J/TAwOwP7Rvkn9MDA7A/tG+Sf0wMDsD+0b5J/TAwfPo53ztf0T+mN+8YMatJgpIdjpt3f0W8hUzpeCdNLUsnB2rb3M8/rJZzk26I8YHatvcx1k85yc0R4wb6eNYb6/lLY3MlzuVyoRfBvXEIQQDlJ+B9b7XmmNxB/UolRkvoee8a4bguHMlSrUq1iTdaQC3ax3dtBlv6X+c9ylc1blNQwveeHOwo28lKbb9xfOB8Xp4uitalfKeh3BG4PnPMqU5U5OMuT1oTU46okhIExAEAQBAEA+GAazTvOg+NhlIKsLgggjyO8jJalhnMFP5j5ZVVRMPRYqSc2U3IJtYkHpvrMFai4tOCZXKmsYSIGtwhKFWnRrls7EWNywCnyvaUyjNPD2K9EYtJ8l+4TwdMOHUuWNRr66baAAek30aKpprPJoSwSoFpedI3iPCErE5ltmABYaPYG4sw2lM6MZ8o41kksulpbjY6fZ0CAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAaXwqnp+kqlRg+wsVSS7TA4JfP5yHs0DvXSMTgF8T+U57LHvZLr5GDYDwb8pB2vcySr96PNParWIalRKMMt2zkd1rgCyHr5/Cez0Pbyp6pNrfbB5XSdZTcYpHH7OOZPo1XsKh+qqka/hfYfA6D1t5zXfW+uOuPK9DNaVtEtD4fqeyA31njnqn2AIAgCAIAgCAIBpqU2LAg2A3HjOA+V8HTdldkUsuxIBIkZU4yeWhg2vTBsSNtpMHNxTGijTaobaDS97Fvug2BsL9ZXUnoWWcbwiG4bzZSe3a/VkJdmJsgJIFlvuNd/KUwuU/1EVUTLIDNRMQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEA5eJcOpYhDSrIHQ9D4+IO4PmNZOE5QeYvDIzhGaxJHjXOvKL4Js63bDse6/VCfuv+h6+s9q2uVVWHyeRcW7pPK4PUuSMU9XA0HqXzFdzuQCQG+IAPxnkXEFCrJR4PUoScqcWydlJaIAgCAIAgCAIBz1mbMLbSuTlnYEXzfimTDsEDXYEXAbQWN7svu+R+EruJNR2IVHsRfKHFa9ZyjMCu5LA3ygADJ03K3v4+N5TQnNy05I05Nk5zDw1q9PKrsLAnKLWc20Vr9L6zRWpucdicllFZ4Fy1UTEfWfdAY3S9N8x1W97F7AeQ6TNToy179hXCnh7l6m8uEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAxqIGBDAEHQg6gjzELYH1RYWGgEA+wBAEAQBAEAQBAEAwq0lYFWAYHQgi4I8wZxpNYYNeFwaU82QWztmOptewGgO2w0E5GEY8HMG+SOiAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIB//Z'
  },
  {
    title: 'Stress Relief',
    description: 'Promotes relaxation and mental well-being.',
    image: 'data:image/jpeg;base64,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'
  },
  {
    title: 'Improved Skin Health',
    description: 'Nourishes skin and enhances natural glow.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtzGyflY-oRKZ_JmdGNSag8_hszwNm4k7xpQ&s'
  }
];


const Card = () => {
  return (
    <div className="grid grid-cols-5 gap-4  object-fill">
      {benefits.map((benefit) => (
        <div key={benefit.title} className="bg-white rounded-2xl shadow-md p-4 text-center">
          <img src={benefit.image} alt={benefit.title} className="w-80 h-[30vh] mx-auto mb-4 object-fil" />
          <h3 className="text-3xl font-semibold">{benefit.title}</h3>
          <p className="text-2xl gray-600">{benefit.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
