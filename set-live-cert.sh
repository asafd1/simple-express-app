sudo snap install core; sudo snap refresh core
sudo apt-get remove certbot
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot
sudo certbot certonly --standalone

DOMAIN=pingone.mobile.ping-eng.com
EMAIL=tlv-mobile@pingidentity.com 

sudo certbot certonly --standalone --noninteractive --agree-tos -d $DOMAIN -m $EMAIL
