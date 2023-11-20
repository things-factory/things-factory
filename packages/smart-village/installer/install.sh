if [ -f "config.production.js" ] ; then
  echo "config.production.js exist"
else
  echo "config.production.js create"
  curl -O https://raw.githubusercontent.com/things-factory/things-factory/master/packages/smart-village/installer/config.production.js
fi

if [ -f "start.sh" ] ; then
  echo "start.sh exist"
else
  echo "start.sh create"
  curl -O https://raw.githubusercontent.com/things-factory/things-factory/master/packages/smart-village/installer/start.sh
fi

if [ -f "stop.sh" ] ; then
  echo "stop.sh exist"
else
  echo "stop.sh create"
  curl -O https://raw.githubusercontent.com/things-factory/things-factory/master/packages/smart-village/installer/stop.sh
fi

if [ -f "upgrade.sh" ] ; then
  echo "upgrade.sh exist"
else
  echo "upgrade.sh create"
  curl -O https://raw.githubusercontent.com/things-factory/things-factory/master/packages/smart-village/installer/upgrade.sh
fi

if [ -f "migrate.sh" ] ; then
  echo "migrate.sh exist"
else
  echo "migrate.sh create"
  curl -O https://raw.githubusercontent.com/things-factory/things-factory/master/packages/smart-village/installer/migrate.sh
fi

if [ -f "docker-compose.yml" ] ; then
  echo "docker-compose.yml exist"
else
  echo "docker-compose.yml create"
  curl -O https://raw.githubusercontent.com/things-factory/things-factory/master/packages/smart-village/installer/docker-compose.yml
fi

if [ -f "scheduler-config.yaml" ] ; then
  echo "scheduler-config.yaml exist"
else
  echo "scheduler-config.yaml create"
  curl -O https://raw.githubusercontent.com/things-factory/things-factory/master/packages/smart-village/installer/scheduler-config.yaml
fi

if [ -f "tsconfig-base.json" ] ; then
  echo "tsconfig-base.json exist"
else
  echo "tsconfig-base.json create"
  curl -O https://raw.githubusercontent.com/things-factory/things-factory/master/packages/smart-village/installer/tsconfig-base.json.yaml
fi

chmod u+x start.sh
chmod u+x stop.sh
chmod u+x upgrade.sh
chmod u+x migrate.sh

echo "HostPort=3000" > .env

docker pull hatiolab/smart-village:latest

docker pull hatiolab/operato-nginx:latest

docker-compose create