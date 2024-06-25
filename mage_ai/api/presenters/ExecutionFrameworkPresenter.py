from typing import Dict

from mage_ai.api.operations.constants import OperationType
from mage_ai.api.presenters.BasePresenter import BasePresenter


class ExecutionFrameworkPresenter(BasePresenter):
    default_attributes = [
        'blocks',
        'description',
        'groups',
        'name',
        'type',
        'uuid',
    ]

    async def prepare_present(self, **kwargs) -> Dict:
        return self.resource.model.to_dict(ignore_empty=True)


ExecutionFrameworkPresenter.register_format(
    OperationType.DETAIL,
    ExecutionFrameworkPresenter.default_attributes
    + [
        'pipelines',
    ],
)
