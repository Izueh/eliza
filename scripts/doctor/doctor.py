from rivescript.rivescript import RiveScript
import os

rive = RiveScript()
rive.load_directory(os.path.join(os.path.dirname(__file__), 'brain'))
rive.sort_replies()

