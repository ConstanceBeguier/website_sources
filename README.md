# Website sources - beguier.eu

## Update the website

```bash
$ bash scripts/get_pub.sh
$ bash scripts/update.sh
$ bash scripts/sync_ftp.sh <username> <ftp_server>
```

Be careful of permissions
```bash
$ find . -type f -not -path "./.git/*" -not -path "./scripts/*" -exec chmod 644 {} \;
$ find . -type d -not -path "./.git*" -not -path "./scripts" -exec chmod 755 {} \;
```
