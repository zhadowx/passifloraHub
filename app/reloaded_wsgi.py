from app import server
from livereload import Server

if __name__=="__main__":
  server_reload= Server(server)
  server_reload.serve()