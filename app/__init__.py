from flask import Flask
from flask_login import LoginManager
from .models import db, User
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt()
login_manager = LoginManager()

def create_app():

    app = Flask(__name__)
    app.config["SECRET_KEY"] = "health-secret"
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    db.init_app(app)
    login_manager.init_app(app)
    bcrypt.init_app(app)

    from .routes import main
    app.register_blueprint(main)

    from .auth import auth
    app.register_blueprint(auth)
    with app.app_context():
        db.create_all()
    return app


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))