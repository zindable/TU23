


# Deployment:

1. Install sudo on server
   ```bash
   apt install sudo -y
   ```
2. Create new user ansible on server
   ```bash
   useradd -m ansible
   passwd <password>
   usermod -aG sudo ansible
   ```
3. Generate ssh key on ansible controller host

   ```bash
   cd ~/.ssh/

   ssh-keygen -t ecdsa
   Enter file in which to save the key (/Users/mzindel/.ssh/id_ecdsa): <Server-Hostname>-ansible
   ```

4. copy ssh keys to ansible user

   ```bash
   ssh-copy-id -i <Server-Hostname>-ansible.pub ansible@<Server-IP>
   ```

5. only allow ssh key auth

   ```bash
   vim /etc/ssh/sshd_config

   PermitRootLogin no
   PubkeyAuthentication yes
   PasswordAuthentication no
   ```

6. restart ssh daemon

   ```bash
   systemctl restart ssh.service
   ```

7. Test connection
   ```bash
   ssh ansible@<Server-IP> -i <Server-Hostname>-ansible
   ```

8. Add to local ssh config file
   ```bash
   vim ~/.ssh/config

   Host <Server-Hostname>
    HostName <Server-Hostname>
    IdentityFile ~/.ssh/<Server-Hostname>-ansible
    User ansible
   ```

9. Run playbook
   ```bash
   ansible-playbook -i inventory.yml main.yml --ask-vault-pass
   ```