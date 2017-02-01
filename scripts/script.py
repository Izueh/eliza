from abc import ABC, abstractmethod

class Script(ABC):
    @abstractmethod
    def answer(request):
        pass
