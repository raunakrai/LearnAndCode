#include <iostream>

using namespace std;

const float avgSpamFootprint = 0.0003;
const float avgInboxFootprint = 0.004;
const float avgSentFootprint = 0.004;
const float avgEmailAttachmentFootprint = 0.05;

float getSpamCarbonFootprint(int totalMails){
    return totalMails * avgSpamFootprint;
}

float getInboxCarbonFootprint(int totalMails){
    return totalMails * avgInboxFootprint;
}

float getSentCarbonFootprint(int totalMails){
    return totalMails * avgSentFootprint;
}

float getEmailAttachmentCarbonFootprint(int totalMails){
    return totalMails * avgEmailAttachmentFootprint;
}

int main()
{
    int totalSpamMails;
    
    cout << "Enter total number of spam mails: ";
    cin >> totalSpamMails;
    
    int totalInboxMails;
    cout << "Enter total number of inbox mails: ";
    cin >> totalInboxMails;
    
    int totalSentMails;
    cout << "Enter total number of Sent mails: ";
    cin >> totalSentMails;
    
    int totalAttachmentEmails;
    cout << "Enter total number of mails with attachments: ";
    cin >> totalAttachmentEmails;
    
    float totalSpamFootprint = getSpamCarbonFootprint(totalSpamMails);
    cout << "spam: " << totalSpamFootprint << "kg" << endl;
    
    float totalInboxFootprint = getInboxCarbonFootprint(totalInboxMails);
    cout << "inbox: " << totalInboxFootprint << "kg" << endl;
    
    float totalSentFootprint = getSentCarbonFootprint(totalSentMails);
    cout << "spam: " << totalSentFootprint << "kg" << endl;
    
    float totalAttachmentEmailFootprint = getEmailAttachmentCarbonFootprint(totalAttachmentEmails);
    cout << "Email with attachments: " << totalAttachmentEmailFootprint << "kg" << endl;
    
    return 0;
}
