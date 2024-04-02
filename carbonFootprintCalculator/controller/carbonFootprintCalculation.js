const {averageSpamFootprint, averageInboxFootprint, averageSentFootprint, averageEmailAttachmentFootprint}  = require('../model/carbonFootprintData');

function getSpamCarbonFootprint(totalMarks)
{
    return totalMarks * averageSpamFootprint
}

function getInboxCarbonFootprint(totalMarks)
{
    return totalMarks * averageInboxFootprint
}

function getSentCarbonFootprint(totalMarks)
{
    return totalMarks * averageSentFootprint
}

function getEmailAttachmentCarbonFootprint(totalMarks)
{
    return totalMarks * averageEmailAttachmentFootprint
}

module.exports = {getSpamCarbonFootprint, getInboxCarbonFootprint, getSentCarbonFootprint, getEmailAttachmentCarbonFootprint};




