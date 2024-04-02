const express = require('express');
const carbonFootprintCalculations = require('../controller/carbonFootprintCalculation');
const router = express.Router();

router.get('/spamFootprint/:totalMails', (require, response)=>
{
const totalMails = parseInt(require.params.totalMails);
const spamFootprint = carbonFootprintCalculations.getSpamCarbonFootprint(totalMails);
response.send(`Spam Carbon Footprint: ${spamFootprint}`);
});

router.get('/InboxFootprint/:totalMails', (require, response)=>
{
const totalMails = parseInt(require.params.totalMails);
const inboxFootprint = carbonFootprintCalculations.getInboxCarbonFootprint(totalMails);
response.send(`Inbox Carbon Footprint: ${inboxFootprint}`);
});

router.get('/sentFootprint/:totalMails', (require, response)=>
{
const totalMails = parseInt(require.params.totalMails);
const sentFootprint = carbonFootprintCalculations.getSentCarbonFootprint(totalMails);
response.send(`Sent Carbon Footprint: ${sentFootprint}`);
});

router.get('/emailAttachmentFootprint/:totalMails', (require, response)=>
{
const totalMails = parseInt(require.params.totalMails);
const emailAttachmentFootprint = carbonFootprintCalculations.getEmailAttachmentCarbonFootprint(totalMails);
response.send(`Email with attachment Carbon Footprint: ${emailAttachmentFootprint}`);
});

module.exports = router;