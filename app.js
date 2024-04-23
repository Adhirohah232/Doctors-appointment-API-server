const express = require('express')
const app = express()
const cors = require('cors');

app.use(express.json());
app.use(cors());

const dummyDoctorData = [{
    name: 'Dr. Hiriluk',
    availabilityHour: 'mon-sat 5:00 PM - 9:00 PM',
    dr_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tellus sit amet libero pretium sodales.',
    available_slots: 0
}, 
{
    name: 'tonny tonny chopper',
    availabilityHour: 'tues-frid 6:00 PM - 7:00 PM',
    dr_description: 'specializes in pharmacologyz.',
    available_slots: 8
},
{
  name: 'Trafalger D law',
  availabilityHour: 'tues-frid 7:00 PM - 9:00 PM',
  dr_description: 'Surgeon of Death',
  available_slots: 7
}
];


app.get('/dummydata', function (req, res) {
  res.send(dummyDoctorData)
})



const PORT = process.env.PORT||8080
app.listen(8080, () => {
  console.log(`Server running on ${PORT}`);
});